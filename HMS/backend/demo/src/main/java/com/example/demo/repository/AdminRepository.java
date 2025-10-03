// AdminRepository.java
package com.example.demo.repository;

import com.example.demo.model.Admin;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    // Custom query methods (if needed) can go here
    Optional<Admin>findByEmail(String email);
}
