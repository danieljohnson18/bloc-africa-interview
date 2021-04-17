import React from "react";
import { Link } from "react-router-dom";
import User from "../../img/user.svg";
import Bell from "../../img/bell.svg";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link class="navbar-brand branding" to="/">
            <span className="ribbon">ribbon</span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex">
              <Link className="nav-item nav-link" to="/userprofile">
                <img src={User} className="img-fluid" />
              </Link>
              <Link className="nav-item nav-link" to="/notification">
                <img src={Bell} className="img-fluid" />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
