package com.Github.RianNegreiros.LearnifyAPI.repositories;

import com.Github.RianNegreiros.LearnifyAPI.entities.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource, Long> {

}
