package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Doctors;
import com.example.demo.repository.DoctorsRepo;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class DoctorsService {

    private final DoctorsRepo doctorsRepository;
    private final String uploadDir = "uploads/avatars/";

    @Autowired
    public DoctorsService(DoctorsRepo doctorsRepository) {
        this.doctorsRepository = doctorsRepository;
    }
    public List<Doctors> getAllDoctors() {
        return doctorsRepository.findAll();
    }
    public Doctors saveDoctor(Doctors doctor, MultipartFile avatar) throws IOException {
        if (avatar != null && !avatar.isEmpty()) {
            String avatarFileName = doctor.getEmail() + "_" + avatar.getOriginalFilename();
            Path avatarPath = Paths.get(uploadDir + avatarFileName);
            Files.createDirectories(avatarPath.getParent());
            Files.write(avatarPath, avatar.getBytes());
            doctor.setAvatarUrl(avatarPath.toString());
        }
        return doctorsRepository.save(doctor);
    }
}
