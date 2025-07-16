package com.oasis.service;


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
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtUtil jwtUtil;

    public AuthService(PasswordEncoder passwordEncoder, UserRepository userRepository, AuthenticationManager authenticationManager, UserService userService, JwtUtil jwtUtil) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

//    public boolean verifyEmail(HttpServletRequest request, String code){
//        String jwt = jwtUtil.extractJwtFromCookie(request);
//        String email = jwtUtil.extractEmail(jwt);
//
//        User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
//
//        if(Objects.equals(code, user.getCode())){
//            user.setVerified(true);
//            userRepository.save(user);
//            return true;
//        }
//
//        return false;
//
//    }

    public UserResponseDto addUser(SignUpRequestDto requestDto) {

        String encodedPassword = passwordEncoder.encode(requestDto.getPassword());

        User user = User.builder().username(requestDto.getUsername()).email(requestDto.getEmail()).password(encodedPassword).role(Role.TEAM).build();


        User createdUser = userRepository.save(user);


        return UserResponseDto.fromEntity(createdUser);
    }

    public SignInResult signin(SignInRequestDto requestDto) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestDto.getEmail(), requestDto.getPassword()));

        UserDetails userDetails = userService.loadUserByUsername(requestDto.getEmail());
        UserResponseDto user = userService.getUserByUsername(userDetails.getUsername());
        String token = jwtUtil.generateToken(userDetails);


        ResponseCookie cookie = ResponseCookie.from("jwt", token).httpOnly(true).secure(false)  // set to true in production
                .path("/").maxAge(24 * 60 * 60).sameSite("Lax").build();

        return SignInResult.builder().cookie(cookie).userResponseDto(user).build();


    }

    public UserResponseDto checkAuth(HttpServletRequest request) {
        String jwt = jwtUtil.extractJwtFromCookie(request);
        String email = jwtUtil.extractEmail(jwt);

        User user = userRepository.findByEmail(email).orElseThrow(() -> new UnauthorizedException("User not found"));

        if (jwt == null || !jwtUtil.validateToken(jwt, UserResponseDto.fromEntity(user))) {
            throw new UnauthorizedException("Invalid or missing token");
        }

        return UserResponseDto.fromEntity(user);
    }

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

    public ResponseCookie logout() {
        return ResponseCookie.from("jwt", "").httpOnly(true).secure(false).path("/").maxAge(0).sameSite("Lax").build();
    }

}
