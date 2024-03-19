package com.optum.doctor.controller;

import com.optum.doctor.model.Doctor;
import com.optum.doctor.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @PostMapping("/")
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) {
        Doctor savedDoctor = doctorService.saveDoctor(doctor);
        return new ResponseEntity<Doctor>(savedDoctor, HttpStatusCode.valueOf(200));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctor(@PathVariable int id) {
        Doctor doctor = doctorService.getDoctor(id);
        return new ResponseEntity<Doctor>(doctor, HttpStatusCode.valueOf(200));
    }

    @GetMapping("/")
    public ResponseEntity<List<Doctor>> getDoctors() {
        List<Doctor> list = doctorService.getDoctors();
        return new ResponseEntity<List<Doctor>>(list, HttpStatusCode.valueOf(200));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable int id, @RequestBody Doctor doctor) {
        Doctor updatedDoctor = doctorService.updateDoctor(id, doctor);
        return new ResponseEntity<Doctor>(updatedDoctor, HttpStatusCode.valueOf(200));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDoctor(@PathVariable int id) {
        doctorService.deleteDoctor(id);
        return new ResponseEntity<String>("Doctor Deleted", HttpStatusCode.valueOf(200));
    }
}
