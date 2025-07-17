package com.oasis.utils;


import org.springframework.stereotype.Component;

import java.security.SecureRandom;

@Component
public class CodeGeneratorUtil {

    private static final SecureRandom secureRandom = new SecureRandom();
    private static final int MIN = 100_000;
    private static final int MAX = 999_999;

    private CodeGeneratorUtil() {
        // Prevent instantiation
    }

    public String generateSixDigitCode() {
        int code = MIN + secureRandom.nextInt(MAX - MIN + 1);
        return String.valueOf(code);
    }
}