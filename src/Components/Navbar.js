import React from "react";
import Naslovna from "./Naslovna.js";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <a href="Naslovna"> Home </a>
        </li>
        <li>
          {" "}
          <a href="#"> About </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#"> Services </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Contact </a>{" "}
        </li>
      </ul>
    </nav>
  );
};
<Naslovna />;
export default Navbar;
