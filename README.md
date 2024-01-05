# Learnify API Documentation

## Overview

This API is designed to manage educational content, including tasks, lessons, and various resources. The entities in the system are interconnected to represent the relationships between different components.

### Entities

![Database Diagram](/_docs/learnifyAPI.drawio.png)

1 - Task

A Task represents a specific educational task that needs to be completed. It has the following properties:

- description: String
        Description of the task.

- questionCount: Integer
        Number of questions in the task.

- approvalCount: Integer
        Number of approvals received.

- weight: Double = 1.0
        Weight of the task.

- dueDate: Instant
        Due date of the task.

2 - Content

Content represents the educational content associated with tasks or lessons. It includes:

- textContent?: String
        Optional text content associated with the task.

- videoUri: String
        URI of the associated video.

- videoUri?: String
        Optional additional video URI.

3 - DeliverStatus (Enumeration)

DeliverStatus is an enumeration representing the status of task delivery. It includes:

- PENDING: int
        Status when the task is pending delivery.

- ACCEPTED: int
        Status when the task is accepted.

- REJECTED: int
        Status when the task is rejected.

4 - ResourceType (Enumeration)

ResourceType is an enumeration representing the type of educational resource. It includes:

- LESSON_ONLY: int
        Resource type for lessons only.

- LESSON_TASK: int
        Resource type for both lessons and tasks.

- FORUM: int
        Resource type for forum discussions.

- EXTERNAL_LINK: int
        Resource type for external links.

### Relationships

- Task has a relationship with Content, indicating that a task may have associated content such as text or video.

- Task is associated with DeliverStatus, representing the status of task delivery (e.g., pending, accepted, rejected).

- Content is associated with ResourceType, specifying the type of educational resource (e.g., lesson only, lesson with a task, forum, external link).