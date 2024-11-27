import React from "react";
import dynamic from 'next/dynamic';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/AdminDashboard";
import SignIn from "./pages/Login";
import SignUp from "./pages/Register";
import Careers from "./pages/Careers";
import Explore from "./pages/Explore";

const BrowserRouter = dynamic(
  () => import('react-router-dom').then((mod) => mod.BrowserRouter),
  { ssr: false } // Disable server-side rendering
);


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
