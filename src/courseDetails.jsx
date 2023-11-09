// src/views/CourseDetails.js
import { useParams, useNavigate } from "react-router-dom";
import courseData from "./courseData";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData.find((c) => c.id === parseInt(id, 10));
  const handleGoBack = () => {
    navigate(-1);
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <div className="listing">
        <div className="course">
          <div className="navbar">
            {" "}
            <h1>Course Details</h1>
          </div>
          <div className="course-preview">
            <div className="course-info">
              <h2>{course.name}</h2>
              <h3>{course.instructor}</h3>
              <h6>{course.description}</h6>
              <h5>Course Duration: {course.duration}</h5>
              <h5>Enrollment Status: {course.enrollmentStatus}</h5>
              <h6>Students Enrolled: {course.students.length}</h6>
              <button onClick={handleGoBack} className="button-27">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
