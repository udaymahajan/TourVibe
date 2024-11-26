'use client';

import Image from "next/image";
import Dashboard from "@/pages/AdminDashboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <Navbar/>,
    <Dashboard/>
  )
}
