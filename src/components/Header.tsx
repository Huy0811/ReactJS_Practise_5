import React from "react";
import logo from "./logo.png";

type HeaderProps = {
  style: React.CSSProperties;
};

const Header = (props: HeaderProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="home">
        <img src={logo} style={props.style} alt="Logo" />
        {/* <img src={require("./logo.png")} style={props.style} alt="Logo" /> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link" href="home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="home">
              News
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="home"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              List of Products
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="home">
                Action
              </a>
              <a className="dropdown-item" href="home">
                Another action
              </a>
              <a className="dropdown-item" href="home">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
