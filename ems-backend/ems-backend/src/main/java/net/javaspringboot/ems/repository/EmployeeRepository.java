package net.javaspringboot.ems.repository;

import net.javaspringboot.ems.Entity.Employee;
import net.javaspringboot.ems.Entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    Page<Employee> findAll(Pageable pageable);
}