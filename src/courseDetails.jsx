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
      <div className="courses-container">
        <div className="course">
          <div className="course-preview">
            <h6>Course</h6>
            <h2>{course.name}</h2>
          </div>
          <div className="course-info">
            <h2>{course.instructor}</h2>
            <h6>{course.description}</h6>
            <h5>Course Duration: {course.duration}</h5>
            <h5>Enrollment Status: {course.enrollmentStatus}</h5>
            <h6>Students Enrolled: {course.students.length}</h6>
            <button onClick={handleGoBack} className="btn">
              Go Back
            </button>
          </div>
        </div>
      </div>
      <h6>Course Schedule: </h6>
    </div>
  );
};

export default CourseDetails;
