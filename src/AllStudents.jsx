import courseData from "./courseData";
const AllStudentsList = () => {
  const allStudents = [];

  courseData.forEach((course) => {
    const studentsInCourse = course.students;
    studentsInCourse.forEach((student) => {
      if (
        !allStudents.some(
          (existingStudent) => existingStudent.id === student.id
        )
      ) {
        allStudents.push(student);
      }
    });
  });

  return (
    <div className="students">
      <ul className="course-list">
        {allStudents.map((student) => (
          <li className="std" key={student.id}>
            <a href={`/dashboard/${student.id}`}>
              <button className="button-27">{student.name}</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudentsList;
