package com.Github.RianNegreiros.LearnifyAPI.repositories;

import com.Github.RianNegreiros.LearnifyAPI.entities.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LessonRepository extends JpaRepository<Lesson, Long> {

}
