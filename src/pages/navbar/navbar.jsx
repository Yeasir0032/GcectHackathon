import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./navbar.scss";
import NavItemMobile from "./naver";

function Navbar({ register, instructor }) {
  const [shownav, setShowNav] = useState(false);
  const navigate = useNavigate();
  console.log(register);
  return (
    <>
      <div className="nav-navbar">
        <div className="logo">
          <div className="drawer-opener" onClick={() => setShowNav(!shownav)}>
            {!shownav ? <AiOutlineHeart /> : <CgProfile />}
          </div>
          <Link to="/">Alien HUB</Link>
        </div>
        <div className="all-links">
          {instructor && <Link to="/instructor">Dashboard</Link>}
          {register && <Link to="/student">Dashboard</Link>}
          {register && <Link to="/course">Courses</Link>}
          <Link to="/library">Library</Link>
        </div>
        {!register ? (
          <div className="login">
            <div className="login-button" onClick={() => navigate("/login")}>
              LOGIN
            </div>
            <div className="sign-up" onClick={() => navigate("/signup")}>
              SIGN UP
            </div>
          </div>
        ) : (
          <div className="icon-container">
            <CgProfile />
            <div className="username">
              {instructor ? instructor.username : JSON.parse(register).username}
              
            </div>
          </div>
        )}
      </div>

      {shownav && <NavItemMobile register={register} setShowNav={setShowNav} />}
    </>
  );
}

export default Navbar;
