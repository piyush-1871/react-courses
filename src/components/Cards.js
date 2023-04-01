import React from "react";
import Card from "./Card";
import { useState } from "react";

function Cards(props) {
    let courses = props.courses;
    let allCourses = [];
    const [likedCourses, setLikedCourses] = useState([]);
    let category = props.category;
  
    function getCourses() {
        if(category === "All"){
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                  allCourses.push(courseData);
                });
              });
            return allCourses;
        }else{
            return courses[category];
        }
      
    }
  
    const coursesArray = getCourses();
  
    // console.log('props:', props);
    // console.log('coursesArray:', coursesArray);
  
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {coursesArray.length > 0 ? (
          coursesArray.map((course) => (
            course.id ? <Card key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} course={course} /> : null
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    );
  }

export default Cards;
