import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}><i>Tour Vibe</i></h1>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/signin" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Register</Link>
        <Link to="/careers" style={styles.link}>Careers</Link>
      </div>
    </nav>
  );
};

const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center", // Align items vertically centered
      padding: "5px 20px",
      background: "#2c3e50",
      color: "#ecf0f1",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Add subtle shadow for depth
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#ecf0f1",
      cursor: "pointer",
      transition: "color 0.3s ease", // Smooth transition for hover effect
    },
    link: {
      margin: "0 15px",
      textDecoration: "none",
      color: "#ecf0f1",
      fontSize: "18px",
      fontWeight: "500",
      transition: "color 0.3s ease", // Smooth transition for hover effect
    },
    linkHover: {
      color: "#3498db", // Highlight color for the links
    },
    navItems: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    mobileMenuIcon: {
      display: "none",
    },
  
    // Mobile styles
    "@media (max-width: 768px)": {
      navbar: {
        flexDirection: "column", // Stack navbar items on smaller screens
        alignItems: "flex-start",
      },
      navItems: {
        flexDirection: "column", // Stack links vertically on mobile
        marginTop: "20px",
      },
      mobileMenuIcon: {
        display: "block",
        fontSize: "28px",
        cursor: "pointer",
        color: "#ecf0f1",
      },
      link: {
        margin: "10px 0",
      },
    },
  };
  

export default Navbar;
