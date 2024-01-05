INSERT INTO tb_user (name, email, password) VALUES ('John Doe', 'johndoe@gmail.com', '$2a$12$VJd0gk/7XMgBPe5eSY2cCeyXXHndSUQ3.w2EKDilmm0djGnZ5qhXm');
INSERT INTO tb_user (name, email, password) VALUES ('Jane Doe', 'janedoe@gmail.com', '$2a$12$F6XL9GFA1yADLTPPSUmsfeEN/fMz9g/5XgmTGr5DiOqX9ojDjNoq2');
INSERT INTO tb_user (name, email, password) VALUES ('Alex Doe', 'alexdoe@gmail.com', '$2a$12$9COODdDON91f1PUOMC57m.tPI7TBRXhQTTpVANwGzNiX6w0EZ/5tm');

INSERT INTO tb_role (authority) VALUES ('ROLE_STUDENT');
INSERT INTO tb_role (authority) VALUES ('ROLE_INSTRUCTOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 3);

INSERT INTO tb_course (name, img_Uri, img_Gray_Uri) VALUES ('Bootcamp HTML', 'https://images.unsplash.com/photo-1621839673705-6617adf9e890', './static/greyimage.png');

INSERT INTO tb_offer (edition, start_Moment, end_Moment, course_id) VALUES ('1.0', TIMESTAMP WITH TIME ZONE '2024-01-20T03:00:00Z', TIMESTAMP WITH TIME ZONE '2024-01-20T03:00:00Z', 1);
INSERT INTO tb_offer (edition, start_Moment, end_Moment, course_id) VALUES ('2.0', TIMESTAMP WITH TIME ZONE '2024-01-20T03:00:00Z', TIMESTAMP WITH TIME ZONE '2024-02-20T03:00:00Z', 1);

INSERT INTO tb_resource (title, description, position, img_Uri, type, offer_id) VALUES ('Arcu felis bibendum', 'scelerisque fermentum dui', 1, 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec', 1, 1);
INSERT INTO tb_resource (title, description, position, img_Uri, type, offer_id) VALUES ('Forum', 'Ask questions', 2, 'https://images.unsplash.com/photo-1623018035782-b269248df916', 2, 1);
INSERT INTO tb_resource (title, description, position, img_Uri, type, offer_id) VALUES ('Lives', 'Exclusive Lives', 3, 'https://images.unsplash.com/photo-1629115928899-bd61fea564c5', 0, 1);

INSERT INTO tb_section (title, description, position, img_Uri, resource_id, prerequisite_id) VALUES ('Chapter 1', 'erat imperdiet sed', 1, 'https://images.unsplash.com/photo-1542831371-29b0f74f9713', 1, null);
INSERT INTO tb_section (title, description, position, img_Uri, resource_id, prerequisite_id) VALUES ('Chapter 2', 'morbi leo urna', 2, 'https://images.unsplash.com/photo-1524666643752-b381eb00effb', 1, 1);
INSERT INTO tb_section (title, description, position, img_Uri, resource_id, prerequisite_id) VALUES ('Chapter 3', 'pretium viverra suspendisse', 3, 'https://images.unsplash.com/photo-1593720216276-0caa6452e004', 1, 2);

INSERT INTO tb_enrollment (user_id, offer_id, enroll_Moment, refund_Moment, available, only_Update) VALUES (1, 1, TIMESTAMP WITH TIME ZONE '2024-01-20T13:00:00Z', null, true, false);
INSERT INTO tb_enrollment (user_id, offer_id, enroll_Moment, refund_Moment, available, only_Update) VALUES (2, 1, TIMESTAMP WITH TIME ZONE '2024-01-20T13:00:00Z', null, true, false);

INSERT INTO tb_lesson (title, position, section_id) VALUES ('Lesson 1', 1, 1);
INSERT INTO tb_content (id, text_Content, video_Uri) VALUES (1, 'Help material: abc', 'https://developer.mozilla.org/en-US/docs/Web/HTML');

INSERT INTO tb_lesson (title, position, section_id) VALUES ('Lesson 2', 2, 1);
INSERT INTO tb_content (id, text_Content, video_Uri) VALUES (2, '', 'https://www.w3schools.com/html/html_intro.asp');

INSERT INTO tb_lesson (title, position, section_id) VALUES ('Lesson 3', 3, 1);
INSERT INTO tb_content (id, text_Content, video_Uri) VALUES (3, '', 'https://www.w3schools.com/html/html_editors.asp');

INSERT INTO tb_lesson (title, position, section_id) VALUES ('Task 1', 4, 1);
INSERT INTO tb_task (id, description, question_Count, approval_Count, weight, due_Date) VALUES (4, 'Make a Todo list', 5, 4, 1.0, TIMESTAMP WITH TIME ZONE '2099-01-25T13:00:00Z');

INSERT INTO tb_lessons_done (lesson_id, user_id, offer_id) VALUES (1, 1, 1);
INSERT INTO tb_lessons_done (lesson_id, user_id, offer_id) VALUES (2, 1, 1);

INSERT INTO tb_notification (text, moment, read, route, user_id) VALUES ('First task feedback', TIMESTAMP WITH TIME ZONE '2024-01-10T13:00:00Z', true, '/offers/1/resource/1/sections/1', 1);
INSERT INTO tb_notification (text, moment, read, route, user_id) VALUES ('Second task feedback', TIMESTAMP WITH TIME ZONE '2024-01-12T13:00:00Z', true, '/offers/1/resource/1/sections/1', 1);
INSERT INTO tb_notification (text, moment, read, route, user_id) VALUES ('Third task feedback', TIMESTAMP WITH TIME ZONE '2024-01-14T13:00:00Z', true, '/offers/1/resource/1/sections/1', 1);

INSERT INTO tb_deliver (uri, moment, status, feedback, correct_Count, lesson_id, user_id, offer_id) VALUES ('https://github.com/RianNegreiros/LearnifyAPI', TIMESTAMP WITH TIME ZONE '2024-01-10T10:00:00Z', 0, null, null, 4, 1, 1);

INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('tortor posuere', 'adipiscing at in tellus integer', TIMESTAMP WITH TIME ZONE '2024-01-12T13:00:00Z', 1, 1, 1);
INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('odio euismod', 'malesuada fames ac turpis egestas', TIMESTAMP WITH TIME ZONE '2024-01-13T13:00:00Z', 2, 1, 1);
INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('viverra aliquet', 'amet venenatis urna cursus eget', TIMESTAMP WITH TIME ZONE '2024-01-14T13:00:00Z', 2, 1, 1);
INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('leo duis', 'suspendisse ultrices gravida dictum fusce', TIMESTAMP WITH TIME ZONE '2024-01-15T13:00:00Z', 1, 1, 2);
INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('semper eget', 'diam sit amet nisl suscipit', TIMESTAMP WITH TIME ZONE '2024-01-16T13:00:00Z', 1, 1, 2);
INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('et malesuada', 'tempus quam pellentesque nec nam', TIMESTAMP WITH TIME ZONE '2024-01-17T13:00:00Z', 2, 1, 3);

INSERT INTO tb_topic_likes (topic_id, user_id) VALUES (1, 2);
INSERT INTO tb_topic_likes (topic_id, user_id) VALUES (2, 1);

INSERT INTO tb_reply (body, moment, topic_id, author_id) VALUES ('nunc sed augue lacus viverra vitae congue eu consequat ac', TIMESTAMP WITH TIME ZONE '2024-01-15T13:00:00Z', 1, 2);
INSERT INTO tb_reply (body, moment, topic_id, author_id) VALUES ('malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi', TIMESTAMP WITH TIME ZONE '2024-01-20T13:00:00Z', 1, 1);

INSERT INTO tb_reply_likes (reply_id, user_id) VALUES (1, 1);
