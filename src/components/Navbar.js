import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}><i>Tour Vibe</i></h1>
      <div>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/signin" style={styles.link}>Sign In</Link>
        <Link to="/signup" style={styles.link}>Sign Up</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#2c3e50",
    color: "#ecf0f1",
  },
  logo: { fontSize: "24px" },
  link: {
    margin: "0 10px",
    textDecoration: "none",
    color: "#ecf0f1",
  },
};

export default Navbar;
