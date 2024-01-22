package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Course;
import com.example.demo.service.CourseService;

@CrossOrigin
@RestController
@RequestMapping("/home")
public class MyController {
	
	@Autowired
	private CourseService service;

	@GetMapping("/")
	public String HomePage() {
		return "Welcome to homePage";
	}
	
	@GetMapping("/courses")
	public List<Course> getCourses(){
		return service.getCourses();
	}
	
	@GetMapping("/course/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return service.getCourseById(Long.parseLong(courseId));
	}
	
	@PostMapping("/add")
	public Course addCourse(@RequestBody Course course) {
		return service.addCourse(course);
	}
	
	@PutMapping("/update")
	public Course updateCourse(@RequestBody Course course) {
		return service.updateCourse(course);
	}
	
	@DeleteMapping("/delete/{courseId}")
	public ResponseEntity<HttpStatus> deleteById(@PathVariable String courseId) {
		return service.deleteById(Long.parseLong(courseId));
		}
	
}
