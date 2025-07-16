package com.oasis.dto.request;

import com.oasis.enums.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class SignUpRequestDto {

    @Size(min = 3, message = "Username must have minimum 3 characters.")
    @NotBlank(message = "Username is required.")
    private String username;

    @Email(message = "Enter a valid email.")
    private String email;

    @Size(min = 8, message = "Password must have at least 8 characters.")
    private String password;

    private Role role;
}
