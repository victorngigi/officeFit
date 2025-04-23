import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>OfficeFit</h1>
      <ul>
        <li><Link to="/chairs">Chairs</Link></li>
        <li><Link to="/desks">Desks</Link></li>
        <li><Link to="/bookshelves">Bookshelves</Link></li>
        <li><Link to="/conference-tables">Conference Tables</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
