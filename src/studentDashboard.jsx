import { useParams } from "react-router-dom";
import courseData from "./courseData";
import { useNavigate, Link } from "react-router-dom";

const StudentDashboard = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const student = courseData
    .flatMap((course) => course.students)
    .find((student) => student.id === parseInt(studentId));
  const studentCourses = courseData.filter((course) =>
    course.students.some((student) => student.id === parseInt(studentId))
  );
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <section className="grid-container">
      <div className="grid-item-2">
        {" "}
        <div className="student-info">
          <h1>Student Dashboard</h1>
          <h2>Student Name: {student ? student.name : "Student Not Found"}</h2>
          <h3>Student Id : {student ? student.id : "Student Not Found"} </h3>
        </div>
        <div className="subject-list">
          <ul>
            {studentCourses.map((course) => (
              <li key={course.id}>
                <Link to={`/course/${course.id}`}>
                  {" "}
                  <button className="">{course.name}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid-item-1">
        {" "}
        <ul>
          {studentCourses.map((course) => (
            <li key={course.id}>
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <p>Progress: {course.completed ? "Completed" : "In Progress"}</p>
            </li>
          ))}
        </ul>
        <button onClick={handleGoBack} className="btn">
          Go Back
        </button>
      </div>
    </section>
  );
};

export default StudentDashboard;
