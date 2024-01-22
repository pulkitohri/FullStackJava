import CourseCards from "../../Components/CourseCards";
import React, { useState } from "react";
import { BASE_URL } from "../../services/helpers";
import axios from "axios";
import { useEffect } from "react";
import './ViewCatalogue.css'

function ViewCatalogue() {
  const [courses , setCourses] = useState([]);  

  const getAll = () => {
    axios.get(`${BASE_URL}/courses`).then(
      (response) => {
        setCourses(response.data);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  useEffect(() => {
        getAll();
      }, []);
      return (
    <div className="container-fluid">
      <div className="row m-3 pb-3 g-3">
      {courses.map((value) => (
        <CourseCards 
        key={value.id}
        imageUrl={value.imageUrl}
        title={value.title}
        description={value.description}
        />
        
      ))}
    </div>
    </div>
  );
  }
export default ViewCatalogue;
