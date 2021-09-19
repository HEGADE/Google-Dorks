import React from "react";
import "../css/nav.css";

export const Nav = () => {
  return (
    <>
      <nav className="navigation_container">
        <div className="nav_heading">
          <h3>Google Dorks</h3>
        </div>

        <div className="github_icon">
          <a href="https://github.com/HEGADE/Google-Dorks" target="_blank"  rel="noreferrer">
            <img src="icon.png" alt="icon" />
          </a>
        </div>
      </nav>
    </>
  );
};
