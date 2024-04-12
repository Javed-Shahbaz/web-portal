import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav-content">
        <span>
          Govt. MC Higher Secondary School <br />
          Allama Iqbal Road Faisalabad
        </span>
        <ul className="right">
          <li onClick={() => navigate("/")} clas>
            Home
          </li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/admission")}>Admissions</li>
          <li onClick={() => navigate("/contact")}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
