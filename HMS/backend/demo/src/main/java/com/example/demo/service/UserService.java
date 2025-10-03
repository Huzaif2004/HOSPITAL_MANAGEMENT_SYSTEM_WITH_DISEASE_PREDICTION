// UserService.java
package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return "Email already exists";
        }
        userRepository.save(user);
        return "User registered successfully";
    }

    public String loginUser(String email, String password) {
        // Find the user by email
        User user = userRepository.findByEmail(email).orElse(null);

        // Check if user exists and password matches
        if (user != null && user.getPassword().equals(password)) {
            return "Login successful!";
        }
        return "Invalid email or password";
    }
}
