package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Doctors;
import com.example.demo.service.DoctorsService;

import java.io.IOException;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/doctors")
public class DoctorsController {

    private final DoctorsService doctorsService;

    @Autowired
    public DoctorsController(DoctorsService doctorsService) {
        this.doctorsService = doctorsService;
    }

    @PostMapping
    public ResponseEntity<Doctors> registerDoctor(
            @RequestParam("doctorName") String doctorName,
            
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("nic") String nic,
            @RequestParam("dob") String dob,
            @RequestParam("gender") String gender,
            @RequestParam("password") String password,
            @RequestParam("department") String department,
            @RequestParam(value = "avatar", required = false) MultipartFile avatar
    ) {
        try {
            Doctors doctor = new Doctors();
            doctor.setDoctorName(doctorName);
            
            doctor.setEmail(email);
            doctor.setPhone(phone);
            doctor.setNic(nic);
            doctor.setDob(dob);
            doctor.setGender(gender);
            doctor.setPassword(password);
            doctor.setDepartment(department);

            Doctors savedDoctor = doctorsService.saveDoctor(doctor, avatar);
            return ResponseEntity.ok(savedDoctor);
        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }
    @GetMapping
    public ResponseEntity<List<Doctors>> getAllDoctors() {
    List<Doctors> doctors = doctorsService.getAllDoctors();
    return ResponseEntity.ok(doctors);
}
}
