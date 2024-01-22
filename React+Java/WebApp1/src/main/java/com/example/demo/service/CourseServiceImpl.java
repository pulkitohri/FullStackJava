package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Course;
import com.example.demo.repository.CourseRepository;

import jakarta.transaction.Transactional;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository repository;
	@Override
	public List<Course> getCourses() {
		return repository.findAll();
	}
	@Override
	public Course getCourseById(long courseId) {
		return repository.findById(courseId).get();
	}
	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
		return repository.save(course);
	}
	@Override
	@Transactional
	public Course updateCourse(Course course) {
		Course existingCourse = repository.findById(course.getId()).get();
		existingCourse.setDescription(course.getDescription());
		existingCourse.setTitle(course.getTitle());
		existingCourse.setImageUrl(course.getImageUrl());
		existingCourse.setRatings(course.getRatings());
		return this.addCourse(course); 
	}
	@Override
	public ResponseEntity<HttpStatus> deleteById(long courseId) {
		try { 
			repository.findById(courseId).get();
			repository.deleteById(courseId);
			return new ResponseEntity<>(HttpStatus.OK);
			}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
