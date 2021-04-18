import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="jb-nav">
        <nav className="navbar navbar-expand-md navbar-light">
          <img
            className="navbar-brand cursor jb-logo"
            src="https://cdn5.f-cdn.com/contestentries/1278300/27385954/5aa65fb21b9c5_thumb900.jpg"
            height="50"
            alt="jb"
          />

          {/* mobile handberger */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* web navigation */}
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-5">
              <Link to="/">
                <li className="nav-item active">
                  <p className="nav-link">Home</p>
                </li>
              </Link>
              <Link to="/about">
                <li className="nav-item toggleAbout">
                  <p className="nav-link">About</p>
                </li>
              </Link>
              <Link to="/shop">
                <li className="nav-item">
                  <p className="nav-link">Shop</p>
                </li>
              </Link>
              <Link to="/todo">
                <li className="nav-item">
                  <p className="nav-link">My Todo's</p>
                </li>
              </Link>
              <Link to="/pokimon">
                <li className="nav-item">
                  <p className="nav-link">Pokimon</p>
                </li>
              </Link>
              <Link to="/tasktracker">
                <li className="nav-item">
                  <p className="nav-link">Task Tracker</p>
                </li>
              </Link>
              <Link to="/gallery">
                <li className="nav-item">
                  <p className="nav-link">Gallery</p>
                </li>
              </Link>
              <Link to="/contact">
                <li className="nav-item">
                  <p className="nav-link">Contact</p>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="float-right mr-3 mt-5 pt-5 social-icons d-none">
          <a href="#" className="nav-item nav-link mt-5 text-white">
            <img src="images/insta.jpg" />
          </a>
          <a href="#" className="nav-item nav-link text-white">
            <img src="images/linkedin.jpg" />
          </a>
          <a href="#" className="nav-item nav-link text-white">
            <img src="images/fb.jpg" />
          </a>
          <a href="#" className="nav-item nav-link text-white">
            <img src="images/twitter.jpg" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
