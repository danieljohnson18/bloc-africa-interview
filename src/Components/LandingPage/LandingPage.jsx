import React from "react";
import "../LandingPage/LandingPage.css";
import Home from "../../img/home.svg";
import List from "../../img/list.png";
import Wallet from "../../img/wallet.png";
import Market from "../../img/market.png";
import { Link } from "react-router-dom";
import Earn from "../../img/profit.png";
import Blood from "../../img/blood-count-test.svg";
import Lungs from "../../img/lungs.svg";
import Arm from "../../img/arm.svg";
import DataDisplay from "../DataDisplay/DataDisplay";
import Currency from "../Currency/Currency";
import TestList from "../TestList/TestList";
import Options from "../Options/Options";
import Nav from "../Nav/Nav";

const LandingPage = () => {
  return (
    <div className="bloc">
      <div className="container-fluid">
        <Nav />
        <DataDisplay />
        <Currency />
        <TestList Blood={Blood} Lungs={Lungs} Arm={Arm} />
        <Options
          Home={Home}
          List={List}
          Wallet={Wallet}
          Market={Market}
          Earn={Earn}
        />
      </div>
    </div>
  );
};

export default LandingPage;
