package com.Github.RianNegreiros.LearnifyAPI.repositories;

import com.Github.RianNegreiros.LearnifyAPI.entities.Enrollment;
import com.Github.RianNegreiros.LearnifyAPI.entities.pk.EnrollmentPK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollmentRepository extends JpaRepository<Enrollment, EnrollmentPK> {

}
