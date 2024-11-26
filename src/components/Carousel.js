import React from "react";
import Slider from "react-slick";
import "../styles/Carousel.css"; // For custom styling
import ParisImage from "../images/paris.png";
import TokyoImage from "../images/tokyo.png";
import SydneyImage from "../images/sydney.png";
import DubaiImage from "../images/dubai.png";

const Carousel = () => {
  const images = [
    {
      src: ParisImage,
      alt: "Paris",
      caption: "Explore the beauty of Paris",
    },
    {
      src: TokyoImage,
      alt: "Tokyo",
      caption: "Discover the charm of Tokyo",
    },
    {
      src: SydneyImage,
      alt: "Sydney",
      caption: "Experience the wonders of Sydney",
    },
    {
      src: DubaiImage,
      alt: "Dubai",
      caption: "Visit the luxurious Dubai",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div style={styles.container}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={styles.slide}>
            <img src={image.src} alt={image.alt} style={styles.image} />
            <div style={styles.caption}>{image.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
  container: { maxWidth: "800px", margin: "auto", padding: "20px" },
  slide: { position: "relative", textAlign: "center" },
  image: { width: "100%", borderRadius: "10px" },
  caption: {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "18px",
  },
};

export default Carousel;
