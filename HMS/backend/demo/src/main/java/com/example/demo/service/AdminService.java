// AdminService.java
package com.example.demo.service;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin addAdmin(Admin admin) {
        // You can add additional validation logic here
        return adminRepository.save(admin);
    }
    public boolean validateUser(String email, String password) {
        // Find the admin by email
        Optional<Admin> adminOptional = adminRepository.findByEmail(email);

        // If admin is not found, return false
        if (adminOptional.isEmpty()) {
            return false;
        }

        // Retrieve the admin object from Optional
        Admin admin = adminOptional.get();

        // Compare the provided password with the stored password (no encoding)
        return password.equals(admin.getPassword());
    }
}
