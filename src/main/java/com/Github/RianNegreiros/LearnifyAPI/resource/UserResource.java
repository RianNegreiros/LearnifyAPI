package com.Github.RianNegreiros.LearnifyAPI.resource;

import com.Github.RianNegreiros.LearnifyAPI.dto.UserDTO;
import com.Github.RianNegreiros.LearnifyAPI.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/users")
public class UserResource {

	@Autowired
	private UserService service;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<UserDTO> findById(@PathVariable Long id) {
		UserDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
}
