import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaHome, FaUser, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import "./index.scss";
import logo from "../../Uploads/pabin_limbu.png";

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        {/* <h1>P L</h1> */}
        <img id="logo_image" src={logo} alt="logo" />
      </Link>

      <nav>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/"
        >
          <FaHome color="#FF9671" />
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "about-link active" : "about-link"
          }
          to="/about"
        >
          <FaUser color="#FF9671" />
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "contact-link active" : "contact-link"
          }
          to="/contact"
        >
          <MdContactPhone color="#FF9671" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" href="https://www.facebook.com/changsu.pabin">
            <FaFacebookSquare color="white" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pabin-limbu-b47ab4212"
          >
            <FaLinkedin color="white" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

/*
activeClassName -The class to give the element when it is active , default given class is active. This will be joined with the className prop.
exact-When true, the active class/style will only be applied if the location is matched exactly. exact in navlink is used for styling purpose.
*/
