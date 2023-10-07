import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Registration from "./pages/login/register";
import HomeBanner from "./pages/landing/Landing";
import Navbar from "./pages/navbar/navbar";
import Library from "./pages/Library/library";
import ResourcePage from "./pages/Library/resources";
import { useEffect, useState } from "react";
import UserRegistration from "./pages/login/UserRegistration";
import CourseEnroll from "./pages/login/course/courseEnroll";
import CourseView from "./pages/login/course/courseView";
import StudentDashboard from "./pages/Student/dashboard";
import InstructorDashboard from "./pages/instructor/insDashboard";
import InstructorLoginPage from "./pages/instructor/insLogin";

function App() {
  const [token, setToken] = useState();
  const [register, setRegister] = useState();
  const [courseSelected, setCourseSelected] = useState();
  const [instructor, setInstructor] = useState();

  useEffect(() => {
    if (localStorage.getItem("instructor")) {
      setInstructor(JSON.parse(localStorage.getItem("instructor")));
    }
    if (localStorage.getItem("token")) {
      const data = JSON.parse(localStorage.getItem("token"));
      setToken(data);
    }
    if (localStorage.getItem("register")) {
      const data = localStorage.getItem("register");
      setRegister(data);
    }
    if (localStorage.getItem("course")) {
      setCourseSelected(localStorage.getItem("course"));
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar register={register} instructor={instructor} />
        <Routes>
          <Route path="/" element={<HomeBanner register={register} />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} register={setRegister} />}
          />
          {token && (
            <Route
              path="/register"
              element={<UserRegistration setRegister={setRegister} />}
            />
          )}
          <Route path="/signup" element={<Registration />} />
          <Route path="/library" element={<Library />} />
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/instructor/login" element={<InstructorLoginPage />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/library/:id" element={<ResourcePage />} />
          {register && <Route path="/course" element={<CourseEnroll />} />}
          {register && <Route path="/course/:id" element={<CourseView />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
