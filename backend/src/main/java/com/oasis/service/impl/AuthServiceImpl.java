package com.oasis.service.impl;


import com.oasis.dto.request.ChangePasswordRequestDto;
import com.oasis.dto.request.SignInRequestDto;
import com.oasis.dto.request.SignUpRequestDto;
import com.oasis.dto.response.SignInResult;
import com.oasis.dto.response.UserResponseDto;
import com.oasis.entity.User;
import com.oasis.enums.Role;
import com.oasis.exception.InvalidPasswordException;
import com.oasis.exception.UnauthorizedException;
import com.oasis.repository.UserRepository;
import com.oasis.service.AuthService;
import com.oasis.service.EmailService;
import com.oasis.service.UserService;
import com.oasis.utils.CodeGeneratorUtil;
import com.oasis.utils.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;


@Service
public class AuthServiceImpl implements AuthService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtUtil jwtUtil;
    private final CodeGeneratorUtil codeGeneratorUtil;
    private final EmailService emailService;

    public AuthServiceImpl(PasswordEncoder passwordEncoder, UserRepository userRepository, AuthenticationManager authenticationManager, UserService userService, JwtUtil jwtUtil, CodeGeneratorUtil codeGeneratorUtil, EmailService emailService) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtUtil = jwtUtil;
        this.codeGeneratorUtil = codeGeneratorUtil;
        this.emailService = emailService;
    }

    @Override
    public boolean verifyEmail(String email, String code){


        User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if(Objects.equals(code, user.getCode())){
            user.setVerified(true);
            userRepository.save(user);
            return true;
        }

        return false;

    }

    @Override
    public UserResponseDto signup(SignUpRequestDto requestDto) {

        String encodedPassword = passwordEncoder.encode(requestDto.getPassword());
        String code = codeGeneratorUtil.generateSixDigitCode();


        User user = User.builder().username(requestDto.getUsername()).email(requestDto.getEmail()).password(encodedPassword).code(code).role(Role.USER).build();


        User createdUser = userRepository.save(user);

        emailService.sendEmail(createdUser.getEmail(), "Email verification code", code);


        return UserResponseDto.fromEntity(createdUser);
    }

    @Override
    public SignInResult signin(SignInRequestDto requestDto) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestDto.getEmail(), requestDto.getPassword()));

        UserDetails userDetails = userService.loadUserByUsername(requestDto.getEmail());
        UserResponseDto user = userService.getUserByUsername(userDetails.getUsername());
        String token = jwtUtil.generateToken(userDetails);


        ResponseCookie cookie = ResponseCookie.from("jwt", token).httpOnly(true).secure(false)  // set to true in production
                .path("/").maxAge(24 * 60 * 60).sameSite("Lax").build();

        return SignInResult.builder().cookie(cookie).userResponseDto(user).build();


    }

    @Override
    public UserResponseDto checkAuth(HttpServletRequest request) {
        String jwt = jwtUtil.extractJwtFromCookie(request);
        String email = jwtUtil.extractEmail(jwt);

        User user = userRepository.findByEmail(email).orElseThrow(() -> new UnauthorizedException("User not found"));

        if (jwt == null || !jwtUtil.validateToken(jwt, UserResponseDto.fromEntity(user))) {
            throw new UnauthorizedException("Invalid or missing token");
        }

        return UserResponseDto.fromEntity(user);
    }

    @Override
    public UserResponseDto changePassword(HttpServletRequest request, ChangePasswordRequestDto requestDto) throws Exception {
        String email = jwtUtil.extractEmailFromCookie(request);

        User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found."));

        if (!passwordEncoder.matches(requestDto.getOldPassword(), user.getPassword())) {
            throw new InvalidPasswordException("Old password is incorrect.");
        }

        if (passwordEncoder.matches(requestDto.getNewPassword(), user.getPassword())) {
            throw new InvalidPasswordException("Old password and new password can not be same.");
        }

        user.setPassword(passwordEncoder.encode(requestDto.getNewPassword()));
        userRepository.save(user);

        return UserResponseDto.fromEntity(user);
    }

    @Override
    public ResponseCookie logout() {
        return ResponseCookie.from("jwt", "").httpOnly(true).secure(false).path("/").maxAge(0).sameSite("Lax").build();
    }

}
