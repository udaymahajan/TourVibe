import React from "react";
import "../styles/Explore.css"; // Import custom styles (optional)

const Explore = () => {
  const exploreOptions = [
    {
      title: "Mountain Adventures",
      description: "Trek through scenic mountains and enjoy breathtaking views.",
      image: "images/mountains.jpg", // Replace with your image
    },
    {
      title: "City Escapes",
      description: "Discover the culture and nightlife of vibrant cities.",
      image: "/images/city.jpg", // Replace with your image
    },
    {
      title: "Beach Getaways",
      description: "Relax on pristine beaches and enjoy the sun.",
      image: "/images/beach.jpg", // Replace with your image
    },
    {
      title: "Cultural Wonders",
      description: "Explore historical landmarks and immerse yourself in history.",
      image: "/images/culture.jpg", // Replace with your image
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Explore Destinations</h2>
      <div style={styles.grid}>
        {exploreOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <img
              src={option.image}
              alt={option.title}
              style={styles.image}
            />
            <div style={styles.content}>
              <h3 style={styles.title}>{option.title}</h3>
              <p style={styles.description}>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styling (optional; use CSS for more complex designs)
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "0 20px",
  },
  card: {
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#7f8c8d",
  },
};

export default Explore;
