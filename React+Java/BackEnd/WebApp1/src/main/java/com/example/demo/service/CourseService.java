package com.example.demo.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.entity.Course;

public interface CourseService {

	public List<Course> getCourses();

	public Course getCourseById(long courseId);

	public Course addCourse(Course course);

	public Course updateCourse(Course course);
	
	public ResponseEntity<HttpStatus> deleteById(long courseId);


	
}
