package com.Github.RianNegreiros.LearnifyAPI.services;

import com.Github.RianNegreiros.LearnifyAPI.dto.DeliverRevisionDTO;
import com.Github.RianNegreiros.LearnifyAPI.entities.Deliver;
import com.Github.RianNegreiros.LearnifyAPI.repositories.DeliverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DeliverService {

	@Autowired
	private DeliverRepository repository;

	@PreAuthorize("hasAnyRole('ADMIN','INSTRUCTOR')")
	@Transactional
	public void saveRevision(Long id, DeliverRevisionDTO dto) {
		Deliver deliver = repository.getOne(id);
		deliver.setStatus(dto.getStatus());
		deliver.setFeedback(dto.getFeedback());
		deliver.setCorrectCount(dto.getCorrectCount());
		repository.save(deliver);
	}
}
