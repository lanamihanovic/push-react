import "./App.css";
import Naslovna from "./Components/Naslovna";
import Prva from "./Components/Prva";
import Druga from "./Components/Druga";
import Treca from "./Components/Treca";
import Cetvrta from "./Components/Cetvrta";

import React from "react";
//import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router class="nav">
        <div>
          <ul>
            <li>
              <Link to="/">Naslovna</Link>
            </li>
            <li>
              <Link to="/Prva">vijesti</Link>
            </li>
            <li>
              <Link to="/Druga">Vinyl</Link>
            </li>
            <li>
              <Link to="/Treca">CD</Link>
            </li>
            <li>
              <Link to="/Cetvrta">Prijava</Link>
            </li>
          </ul>

          <hr />
          <Routes>
            <Route exact path="/" component={Naslovna} />
            <Route path="/Prva" component={Prva} />
            <Route path="/Druga" component={Druga} />
            <Route path="/Treca" component={Treca} />
            <Route path="/Cetvrta" component={Cetvrta} />
          </Routes>
        </div>
      </Router>
      ;{" "}
    </div>
  );
}

export default App;
