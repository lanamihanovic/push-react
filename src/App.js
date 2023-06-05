import "./App.css";
import Naslovna from "./Components/Naslovna";
import Prva from "./Components/Prva";
import Druga from "./Components/Druga";
import Treca from "./Components/Treca";
import slika from './'
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Props from "./Components/Props";
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
            <li></li>
          </ul>

          <hr />
          <Routes>
            <Route exact path="/" component={Naslovna} />
            <Route path="/Prva" component={Prva} />
            <Route path="/Druga" component={Druga} />
            <Route path="/Treca" component={Treca} />
          </Routes>
        </div>
      </Router>
      <Props />
      
    </div>
  );
}

export default App;
