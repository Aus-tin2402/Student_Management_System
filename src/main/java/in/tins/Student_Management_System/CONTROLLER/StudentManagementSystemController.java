package in.tins.Student_Management_System.CONTROLLER;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import in.tins.Student_Management_System.DTO.StudentManagementSystem;
import in.tins.Student_Management_System.RESPONSESTRUCTURE.ResponseStructure;
import in.tins.Student_Management_System.SERVICE.StudentManagementSystemService;

@RestController
@CrossOrigin
public class StudentManagementSystemController {
	@Autowired
	private StudentManagementSystemService service;
	@PostMapping("/AddUser")
	public ResponseStructure<StudentManagementSystem> signUp(StudentManagementSystem system) {
		return service.save(system);
	}
	@GetMapping("/GetAll")
	public ResponseStructure<List<StudentManagementSystem>> login() {
		return service.fetchAll();
	}
}
