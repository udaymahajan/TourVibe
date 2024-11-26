import React from "react";
import Carousel from "../components/Carousel"
import DestinationCard from "../components/DestinationCard";


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

  const handleExplore = () => {
    alert("Explore feature coming soon!");
};

  return (
   
    <div style={styles.container}>
      {/* Welcome Section */}
      <div style={styles.welcomeSection}>
        <h1 style={styles.heading}>Welcome to Tour Vibe!</h1>
        <p style={styles.subheading}>
          Discover your next adventure with our curated destinations.
        </p>
        <button style={styles.exploreButton} onClick={handleExplore}>
          Explore Now
        </button>
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
    padding: "20px",
  },
  welcomeSection: {
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
