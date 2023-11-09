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
      <ul>
        {allStudents.map((student) => (
          <li key={student.id}>
            <a href={`/dashboard/${student.id}`}>
              <button>
                {student.name} - {student.email}
              </button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudentsList;
