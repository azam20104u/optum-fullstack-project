package com.optum.doctor.service;

import com.optum.doctor.model.Doctor;
import com.optum.doctor.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;
    public List<Doctor> getDoctors() {
        return doctorRepository.findAll();
    }

    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public Doctor getDoctor(int id) {
        return doctorRepository.findById(id).get();
    }

    public Doctor updateDoctor(int id, Doctor doctor) {
        Doctor findDoctor = doctorRepository.findById(id).get();
        findDoctor.setName(doctor.getName());
        return doctorRepository.save(findDoctor);
    }

    public void deleteDoctor(int id) {
        doctorRepository.deleteById(id);
    }
}
