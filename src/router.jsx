// src/router.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseListing from "./courseListing";
import CourseDetails from "./courseDetails";
import StudentDashboard from "./studentDashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<CourseListing />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/dashboard/:studentId" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
