package com.example.demo.service;

import com.example.demo.model.Appointment;
import com.example.demo.model.Appointment.AppointmentStatus;
import com.example.demo.repository.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    private final AppointmentRepo appointmentRepository;

    @Autowired
    public AppointmentService(AppointmentRepo appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public Appointment createAppointment(Appointment appointment) {
        appointment.setStatus(AppointmentStatus.PENDING);  // Initial status
        return appointmentRepository.save(appointment);
    }

   
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }
    public Optional<Appointment> updateAppointmentStatus(Long id, AppointmentStatus status) {
        Optional<Appointment> appointment = appointmentRepository.findById(id);
        appointment.ifPresent(appt -> {
            appt.setStatus(status);
            appointmentRepository.save(appt);
        });
        return appointment;
    }
}
