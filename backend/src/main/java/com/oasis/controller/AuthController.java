package com.oasis.controller;


import com.oasis.dto.request.VerifyEmailRequestDto;
import com.oasis.exception.UnauthorizedException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.oasis.dto.request.SignInRequestDto;
import com.oasis.dto.request.SignUpRequestDto;
import com.oasis.dto.response.SignInResult;
import com.oasis.dto.response.UserResponseDto;
import com.oasis.dto.response.common.ApiResponse;
import com.oasis.service.AuthService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/check-auth")
    public ResponseEntity<ApiResponse<Object>> checkAuth(HttpServletRequest request) {
        try {
            UserResponseDto user = authService.checkAuth(request);

            return ResponseEntity.ok(
                    new ApiResponse<>(true, "Authorized", user));
        } catch (UnauthorizedException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ApiResponse<>(false, ex.getMessage(), null));
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<UserResponseDto>> signup(@Valid @RequestBody SignUpRequestDto request){
        UserResponseDto user = authService.signup(request);

        ApiResponse<UserResponseDto> response = new ApiResponse<>(
                true,
                "Account created successfully",
                user
        );

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/verify-email")
    public ResponseEntity<ApiResponse<Object>> verifyEmail(@RequestBody VerifyEmailRequestDto requestDto){
        boolean verified = authService.verifyEmail(requestDto.getEmail(), requestDto.getCode());

        if(verified) return new ResponseEntity<>(
                new ApiResponse<>(true, "Email Verified", null),
                HttpStatus.OK
        );
        else  return new ResponseEntity<>(
                new ApiResponse<>(false, "Your code is invalid.", null),
                HttpStatus.BAD_REQUEST
        );
    }

    @PostMapping("/signin")
    public ResponseEntity<ApiResponse<Object>> signin(@Valid @RequestBody SignInRequestDto request){
        SignInResult signInResult = authService.signin(request);

        ApiResponse<Object> response = new ApiResponse<>(
                true,
                "Login successful.",
                signInResult.getUserResponseDto()
        );

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, signInResult.getCookie().toString())
                .body(response);
    }


}
