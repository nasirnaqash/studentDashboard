// src/views/CourseListing.js
import { useState } from "react";
import { Link } from "react-router-dom";
import courseData from "./courseData";
import AllStudentsList from "./AllStudents";

const CourseListing = () => {
  const [courses, setCourses] = useState(courseData);
  const [search, setSearch] = useState("");
  const [showStudents, setShowStudents] = useState(false);

  const handleSearch = () => {
    const filteredCourses = courseData.filter((course) => {
      const searchLowerCase = search.toLowerCase();
      return (
        course.name.toLowerCase().includes(searchLowerCase) ||
        course.instructor.toLowerCase().includes(searchLowerCase)
      );
    });

    setCourses(filteredCourses);
  };
  const handleShowStudents = () => {
    if (showStudents == false) {
      setShowStudents(true);
    } else {
      setShowStudents(false);
    }
  };

  return (
    <div className="listing">
      <h1>Course Listing</h1>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul className="course-list">
        {courses.map((course) => (
          <li className={`listing-${course.id}`} key={course.id}>
            <div className="courses-container">
              <div className="course">
                <div className="course-preview">
                  <h6>Course</h6>
                  <h2>{course.name}</h2>
                </div>
                <div className="course-info">
                  <h6>{course.duration}</h6>
                  <h2>{course.instructor}</h2>
                  <Link to={`/course/${course.id}`}>
                    {" "}
                    <button className="btn">Continue</button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={handleShowStudents} className="">
        All Students
      </button>
      {showStudents ? <AllStudentsList /> : " "}
    </div>
  );
};

export default CourseListing;
