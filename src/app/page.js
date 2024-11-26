'use client';

import Image from "next/image";
import Dashboard from "@/pages/AdminDashboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import DestinationCard from "@/components/DestinationCard";
import BookingForm from "@/components/BookingForm";
import SearchBar from "@/components/SearchBar"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Modal from "@/components/Modal"
import TourGuideCard from "@/components/TourGuideCard"
import AdminDashboard from "@/pages/AdminDashboard"


export default function Home() {
  return (
    <div>
      <AdminDashboard />
    </div>
    
  );
}
