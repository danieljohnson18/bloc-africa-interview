import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <NavBar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
