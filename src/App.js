import "./App.css";
import Naslovna from "./Components/Naslovna";
import Prva from "./Components/Prva";
import Druga from "./Components/Druga";
import Treca from "./Components/Treca";
import Cetvrta from "./Components/Cetvrta";

import React from "react";
//import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/Prva"></Link>
            </li>
            <li>
              <Link to="/Druga">Topics</Link>
            </li>
            <li>
              <Link to="/Treca"></Link>
            </li>
            <li>
              <Link to="/Cetvrta"></Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Naslovna} />
          <Route path="/Prva" component={Prva} />
          <Route path="/Druga" component={Druga} />
          <Route path="/Treca" component={Treca} />
          <Route path="/Cetvrta" component={Cetvrta} />
        </div>
      </Router>
      ;{" "}
    </div>
  );
}

export default App;
