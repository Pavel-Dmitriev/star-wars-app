import React from "react";

import "./style.css";

function Header() {
  return (
    <header className="header d-flex align-items-center">
      <h1>StarWars</h1>
      <nav className="navbar navbar-expand-lg navbar-dark w-100">
        <ul className="navbar-nav me-auto d-flex">
          <li className="nav-item">
            <a href="/" className="nav-link text-success">
              Persons
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-success">
              Planets
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-success">
              Starships
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
