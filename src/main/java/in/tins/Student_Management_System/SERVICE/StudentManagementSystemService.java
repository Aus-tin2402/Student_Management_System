package in.tins.Student_Management_System.SERVICE;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import in.tins.Student_Management_System.DAO.StudentManagementSystemDAO;
import in.tins.Student_Management_System.DTO.StudentManagementSystem;
import in.tins.Student_Management_System.RESPONSESTRUCTURE.ResponseStructure;

@Service
public class StudentManagementSystemService {
	private StudentManagementSystemDAO dao;

	public ResponseStructure<StudentManagementSystem> save(StudentManagementSystem system) {
		ResponseStructure<StudentManagementSystem> structure = new ResponseStructure<StudentManagementSystem>();
		structure.setData(dao.save(system));
		structure.setMsg("Sign-Up Sucessfully");
		structure.setStatus(HttpStatus.CREATED.value());
		return structure;

	}

	public ResponseStructure<List<StudentManagementSystem>> fetchAll() {
		ResponseStructure<List<StudentManagementSystem>> structure = new ResponseStructure<List<StudentManagementSystem>>();
		structure.setData(dao.fetchAll());
		structure.setMsg("Login Sucessfully");
		structure.setStatus(HttpStatus.CREATED.value());
		return structure;
	}
}
