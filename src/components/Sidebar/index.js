import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Sidebar(props) {
  return (
    <div className="nav-bar">
      <div className="logo">
        <p>Pabin Limbu</p>
      </div>
      <div className="header-links">
        <Link
          onClick={(e) => {
            props.handleNavClick("about");
          }}
          href=""
        >
          About
        </Link>
        <Link
          onClick={(e) => {
            props.handleNavClick("project");
          }}
          href=""
        >
          project
        </Link>

        <Link
          onClick={(e) => {
            props.handleNavClick("contact");
          }}
          href=""
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

/*
activeClassName -The class to give the element when it is active , default given class is active. This will be joined with the className prop.
exact-When true, the active class/style will only be applied if the location is matched exactly. exact in navlink is used for styling purpose.
*/
