import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "../src/Pages/Home";
import Activity from "../src/Pages/Activity";
import Earn from "../src/Pages/Earn";
import Market from "../src/Pages/Market";
import Wallet from "../src/Pages/Wallet";
import LandingPage from "./Components/LandingPage/LandingPage";
import UserProfile from "./Pages/UserProfile";
import Notification from "./Pages/Notification";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/activity">
          <Activity />
        </Route>
        <Route path="/earn">
          <Earn />
        </Route>
        <Route path="/market">
          <Market />
        </Route>
        <Route path="/userprofile">
          <UserProfile />
        </Route>
        <Route path="/notification">
          <Notification />
        </Route>
        <Route path="/wallet">
          <Wallet />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
