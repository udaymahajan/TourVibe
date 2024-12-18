import React from "react";
import Carousel from "../components/Carousel"
import DestinationCard from "../components/DestinationCard";
import { Link } from "react-router-dom"; // Add this import


const Dashboard = () => {
const destinations = [
    {
      image: "/images/paris.png",
      title: "Paris, France",
      description: "Discover the City of Lights and its romantic charm.",
    },
    {
      image: "/images/tokyo.png",
      title: "Tokyo, Japan",
      description: "Immerse yourself in Tokyo's rich culture and cuisine.",
    },
    {
      image: "/images/sydney.png",
      title: "Sydney, Australia",
      description: "Relax on the beaches or visit the Sydney Opera House.",
    },
    {
      image: "/images/dubai.png",
      title: "Dubai, UAE",
      description: "Experience luxury and stunning skyscrapers in Dubai.",
    },
  ];

  return (   
   
    <div style={styles.container} className="container" >
      {/* Welcome Section */}
      <div style={styles.welcomeSection}>
        <h1 style={styles.heading}>Welcome to Tour Vibe!</h1>
        <p style={styles.subheading}>
          Discover your next adventure with our curated destinations.
        </p>
        {/* Link to Explore page */}
        <Link to="/explore">
          <button style={styles.exploreButton}>
            Explore Now
          </button>
        </Link>
      </div>

      <div style={styles.carouselSection}>
        <Carousel />
      </div>

      {/* Destinations Section */}
      <div style={styles.destinationsSection}>
        <h2 style={styles.sectionTitle}>Popular Destinations</h2>
        <div style={styles.cardGrid}>
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              image={destination.image}
              title={destination.title}
              description={destination.description}
              onClick={() => alert(`Learn more about ${destination.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {

    

    container: {
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh", // Ensures the container covers at least the full viewport height
        width: "100%", // Full width of the viewport
        backgroundImage: "url('../images/cover-page.png')",
        backgroundRepeat: "no-repeat", // Prevent tiling
        backgroundSize: "cover", // Stretch to cover the full container
        backgroundPosition: "center", // Center the image
        overflow: "hidden", // Prevent scrolling
        margin: "0", // Remove any margins
        padding: "0", // Remove padding
      },
    

      
  welcomeSection: {
    paddingTop: "1px",
    textAlign: "center",
    marginBottom: "40px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2c3e50",
  },
  subheading: {
    fontSize: "18px",
    color: "#7f8c8d",
    margin: "10px 0 20px",
  },
  exploreButton: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  carouselSection: {
    marginBottom: "40px",
  },
  destinationsSection: {
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
};

export default Dashboard;
