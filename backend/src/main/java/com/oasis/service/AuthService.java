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
public interface AuthService {


    public boolean verifyEmail(String email, String code);

    public UserResponseDto signup(SignUpRequestDto requestDto);

    public SignInResult signin(SignInRequestDto requestDto);

    public UserResponseDto checkAuth(HttpServletRequest request);

    public UserResponseDto changePassword(HttpServletRequest request, ChangePasswordRequestDto requestDto) throws Exception;

    public boolean checkUsernameExists(String username);

    public boolean checkEmailExists(String email);

    public ResponseCookie logout();

}
