package com.example.demo.entity;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@DynamicInsert
@DynamicUpdate
public class Course {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;
private String title;
private String description;
private String ImageUrl;
private String ratings;
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getImageUrl() {
	return ImageUrl;
}
public void setImageUrl(String imageUrl) {
	ImageUrl = imageUrl;
}
public String getRatings() {
	return ratings;
}
public void setRatings(String ratings) {
	this.ratings = ratings;
}
@Override
public String toString() {
	return "Course [id=" + id + ", title=" + title + ", description=" + description + ", ImageUrl=" + ImageUrl
			+ ", ratings=" + ratings + "]";
}

}
