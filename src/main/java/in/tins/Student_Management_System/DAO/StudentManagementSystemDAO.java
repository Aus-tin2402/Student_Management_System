package in.tins.Student_Management_System.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import in.tins.Student_Management_System.DTO.StudentManagementSystem;
import in.tins.Student_Management_System.REPOSITORY.StudentManagementRepository;

@Repository
public class StudentManagementSystemDAO {
	@Autowired
	private StudentManagementRepository repository;

	public StudentManagementSystem save(StudentManagementSystem system) {
		return repository.save(system);
	}

	public List<StudentManagementSystem> fetchAll() {
		return repository.findAll();
	}
}
