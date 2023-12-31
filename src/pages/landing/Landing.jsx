import React from "react";
import "./Landing.scss";
import Image123 from "../../assets/img-01.png";
import { useNavigate } from "react-router-dom";
import {FaChalkboardTeacher} from 'react-icons/fa';
import {RiDashboard3Line} from 'react-icons/ri';
import {HiLibrary} from 'react-icons/hi'

// import { TypeAnimation } from "react-type-animation";
function HomeBanner({ register }) {
  const navigate = useNavigate();

  const lightPressed = () => {
    navigate(register ? "/student" : "/signup");
  };
  const hardPressed = () => {
    navigate(register ? "/library" : "/login");
  };

  return (
    <div className="hero-banner">
      <div className="ban-content">
        <div className="text-content">
          <h1>Alien HUB</h1>
          {register ? (
            <>
              <p>
                Hey Welcome to Alien HUB! Its marvellous to see you again.
                Continue your learning through the best platform in the
                internet.
              </p>
              <div className="ctas">
                <div className="banner-cta" onClick={lightPressed}>
                  <RiDashboard3Line/>{"  "}
                  Dashboard
                </div>
                <div className="banner-cta v2" onClick={hardPressed}>
                  <HiLibrary/>{"  "}
                  Libray
                </div>
              </div>
            </>
          ) : (
            <>
              <p>
                A platform for students of computer science background. With
                features like high defined courses with instructor, library with
                vast resourses of learning and guided paths
              </p>
              <div className="ctas">
                <div className="banner-cta" onClick={lightPressed}>
                  Sign Up
                </div>
                <div className="banner-cta v2" onClick={hardPressed}>
                  Log in
                </div>
              </div>
            </>
          )}
        </div>
        <img
          className="banner-img"
          src={Image123}
          alt="A photo for Scholar sphere"
        />
      </div>
      <div className="login-as-instructor">
        <div className="text-content">
          <div className="heading">Are you an Instructor ?</div>
          <p>
            Are you an Instructor? Just Login with your credentials and Get
            connected to all your students.
          </p>
          <div className="ctas">
            <div
              className="banner-cta"
              onClick={() => navigate("/instructor/login")}
            >
              <FaChalkboardTeacher/> {"  "}
              Instructor Login
            </div>
            <div
              className="banner-cta v2"
              onClick={() => navigate("/instructor")}
            >
              <RiDashboard3Line/> {"  "}
              Instructor Dashboard
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
