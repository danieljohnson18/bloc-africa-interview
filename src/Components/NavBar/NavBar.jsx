import React from "react";
import "../NavBar/NavBar.css";
import Home from "../../img/home.svg";
import List from "../../img/list.png";
import Wallet from "../../img/wallet.png";
import Market from "../../img/market.png";
import { Link } from "react-router-dom";
import Earn from "../../img/profit.png";
import Blood from "../../img/blood-count-test.svg";
import Lungs from "../../img/lungs.svg";
import Arm from "../../img/arm.svg";
import User from "../../img/user.svg";
import Bell from "../../img/bell.svg";

const NavBar = () => {
  return (
    <div className="bloc">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <Link class="navbar-brand branding" to="/">
              <span className="ribbon">Ribbon</span>
            </Link>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav d-flex">
                <Link className="nav-item nav-link" to="/jumpingcastle">
                  <img src={User} className="img-fluid" />
                </Link>
                <Link className="nav-item nav-link" to="/funfood">
                  <img src={Bell} className="img-fluid" />
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        <div class="row">
          <div class="col balance">
            <div className="center-content">
              <div class="d-flex flex-column bd-highlight">
                <div class="bd-highlight">
                  <span class="badge bg-light text-dark">AFYA</span>
                </div>
                <div class=" bd-highlight price">143.00</div>
                <div class=" bd-highlight bill">Balance</div>
              </div>
            </div>
          </div>
          <div class="col eqivalent">
            <div className="center-content">
              <div class="d-flex flex-column bd-highlight">
                <div class=" bd-highlight">
                  <span class="badge bg-light text-primary">ZAR</span>
                </div>
                <div class=" bd-highlight price">143.00</div>
                <div class=" bd-highlight bill">Balance</div>
              </div>
            </div>
          </div>
        </div>

        <div className="currency">
          <h3 className="currency-text">select currency:</h3>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            AFYA
          </button>
          <span className="numbers">0.00000001</span>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button class="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
        <div className="send-recieve">
          <button type="button" class="btn btn-primary btn-lg">
            SEND
          </button>
          <button type="button" class="btn btn-primary btn-lg">
            RECIEVE
          </button>
        </div>
        <h4 className="activity">Recent Activity</h4>
        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <span>
              <img src={Blood} className="test" />
            </span>
            <div class="ms-2 me-auto">
              <div class="fw-bold">HIV Blood Draw Test</div>
            </div>
            <span>A100</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <span>
              <img src={Lungs} className="test" />
            </span>
            <div class="ms-2 me-auto">
              <div class="fw-bold">TB Radiology XRay</div>
            </div>
            <span>A31</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <span>
              <img src={Arm} className="test" />
            </span>
            <div class="ms-2 me-auto">
              <div class="fw-bold">Blood Pressure Check</div>
            </div>
            <span>A10</span>
          </li>
        </ol>
        <h4 className="activity"></h4>

        <nav class="navbar navbar-light ">
          <div class="container-fluid base-footer">
            <a class="navbar-brand ribbon" href="#"></a>
            <a class="navbar-brand ribbon" href="#"></a>
            <a class="navbar-brand ribbon" href="#"></a>
            <a class="navbar-brand ribbon" href="#"></a>
            <a class="navbar-brand ribbon" href="#"></a>
          </div>
        </nav>

        <div class="row">
          <div class="col">
            <img src={Home} className="img-fluid" />
            <h4 className="footer-text">Home</h4>
          </div>
          <div class="col">
            <img src={List} className="img-fluid" />
            <h4 className="footer-text">Activity</h4>
          </div>
          <div class="col">
            <img src={Wallet} className="img-fluid" />
            <h4 className="footer-text">Wallet</h4>
          </div>
          <div class="col">
            <img src={Market} className="img-fluid" />
            <h4 className="footer-text">Market</h4>
          </div>
          <div class="col">
            <img src={Earn} className="img-fluid" />
            <h4 className="footer-text">Earn</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
