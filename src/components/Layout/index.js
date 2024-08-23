import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";
function Layout() {
  return (
    <div>
      {/* <Sidebar /> */}
      <div className="page">
        {/* The use of outlet in parent element allow us to render the nested route element. */}
        <Outlet />

        <div className="footer">
          <p>Pabin Limbu &copy; 2022 </p>
        </div>
      </div>
    </div>
  );
}

export default Layout;
