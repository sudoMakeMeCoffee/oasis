package com.oasis.controller;


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
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<UserResponseDto>> signup(@Valid @RequestBody SignUpRequestDto request){
        UserResponseDto user = authService.addUser(request);

        ApiResponse<UserResponseDto> response = new ApiResponse<>(
                true,
                "Account created successfully",
                user
        );

        return new ResponseEntity<>(response, HttpStatus.CREATED);
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
