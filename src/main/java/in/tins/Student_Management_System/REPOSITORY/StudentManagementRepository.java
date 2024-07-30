package in.tins.Student_Management_System.REPOSITORY;

import org.springframework.data.jpa.repository.JpaRepository;

import in.tins.Student_Management_System.DTO.StudentManagementSystem;

public interface StudentManagementRepository extends JpaRepository<StudentManagementSystem, String>{

}
