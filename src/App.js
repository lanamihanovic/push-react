import "./App.css";
import Naslovna from "./Components/Naslovna";
import Prva from "./Components/Prva";
import Druga from "./Components/Druga";
import Treca from "./Components/Treca";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Props from "./Components/Props";
function App() {
  return (
    <div className="App">
      
      <Router class="nav">
        
        <Routes>
          <Route path="/" element={Naslovna} />
          <Route path="/Prva" element={Prva} />
          <Route path="/Druga" element={Druga} />
          <Route path="/Treca" element={Treca} />
        </Routes>
      </Router>
      <Props />
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
          </div>
    </div>
  );
}

export default App;
