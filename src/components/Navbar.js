import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">QuizQuest</div>
      <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/add-player" onClick={() => setOpen(false)}>Start Quiz</Link></li>
        <li><Link to="/leaderboard" onClick={() => setOpen(false)}>Scores</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
