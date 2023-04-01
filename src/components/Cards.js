import React from "react";
import Card from "./Card";

function Cards(props) {
    let courses = props.courses;
    let allCourses = [];
  
    function getCourses() {
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    }
  
    const coursesArray = getCourses();
  
    // console.log('props:', props);
    // console.log('coursesArray:', coursesArray);
  
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {coursesArray.length > 0 ? (
          coursesArray.map((course) => (
            course.id ? <Card key={course.id} course={course} /> : null
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    );
  }

export default Cards;
