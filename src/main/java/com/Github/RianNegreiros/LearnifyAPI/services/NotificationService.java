package com.Github.RianNegreiros.LearnifyAPI.services;

import com.Github.RianNegreiros.LearnifyAPI.dto.NotificationDTO;
import com.Github.RianNegreiros.LearnifyAPI.entities.Notification;
import com.Github.RianNegreiros.LearnifyAPI.entities.User;
import com.Github.RianNegreiros.LearnifyAPI.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class NotificationService {

	@Autowired
	private NotificationRepository repository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional(readOnly = true)
	public Page<NotificationDTO> notificationsForCurrentUser(boolean unreadOnly, Pageable pageable) {
		User user = authService.authenticated();
		Page<Notification> page = repository.find(user, unreadOnly, pageable);
		return page.map(NotificationDTO::new);
	}
}
