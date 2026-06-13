package com.dentistatdoor.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dentistatdoor.backend.model.Patient;
import com.dentistatdoor.backend.repository.PatientRepository;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = {"http://localhost:3000", "https://dentist-at-door.netlify.app"})
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/register")
    public ResponseEntity<Patient> registerPatient(@RequestBody Patient patient) {
        String patientId = "DATD" + (int)(Math.random() * 90000 + 10000);
        patient.setPatientId(patientId);
        Patient saved = patientRepository.save(patient);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{patientId}")
    public ResponseEntity<?> getPatient(@PathVariable String patientId) {
        return patientRepository.findByPatientId(patientId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllPatients() {
        return ResponseEntity.ok(patientRepository.findAll());
    }
}