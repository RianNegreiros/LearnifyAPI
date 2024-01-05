package com.Github.RianNegreiros.LearnifyAPI.repositories;

import com.Github.RianNegreiros.LearnifyAPI.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
