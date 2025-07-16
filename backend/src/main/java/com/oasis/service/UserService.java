package com.oasis.service;


import com.oasis.dto.response.UserResponseDto;
import com.oasis.entity.User;
import com.oasis.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), user.getAuthorities());

    }

    public UserResponseDto getUserByUsername(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found."));
        return UserResponseDto.fromEntity(user);
    }
}
