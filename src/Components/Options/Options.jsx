import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const Options = ({ Home, Wallet, List, Market, Earn }) => {
  return (
    <div>
      <div class="row options">
        <div class="col">
          <Link to="/home">
            <img src={Home} className="img-fluid" />
            <h4 className="footer-text">Home</h4>
          </Link>
        </div>
        <div class="col">
          <Link to="/activity">
            <img src={List} className="img-fluid" />
            <h4 className="footer-text">Activity</h4>
          </Link>
        </div>
        <div class="col">
          <Link to="/wallet">
            <img src={Wallet} className="img-fluid" />
            <h4 className="footer-text">Wallet</h4>
          </Link>
        </div>
        <div class="col">
          <Link to="/market">
            <img src={Market} className="img-fluid" />
            <h4 className="footer-text">Market</h4>
          </Link>
        </div>
        <div class="col">
          <Link to="/earn">
            <img src={Earn} className="img-fluid" />
            <h4 className="footer-text">Earn</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Options;
