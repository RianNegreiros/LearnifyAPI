package com.Github.RianNegreiros.LearnifyAPI.resource;

import com.Github.RianNegreiros.LearnifyAPI.dto.DeliverRevisionDTO;
import com.Github.RianNegreiros.LearnifyAPI.services.DeliverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/deliveries")
public class DeliverResource {

	@Autowired
	private DeliverService service;
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Void> saveRevision(@PathVariable Long id, @RequestBody DeliverRevisionDTO dto) {
		service.saveRevision(id, dto);
		return ResponseEntity.noContent().build();
	}
}
