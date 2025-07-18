package com.oasis.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerifyEmailRequestDto {
    private String email;
    private String code;
    private String password;
}
