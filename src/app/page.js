"use client"
import Navbar from "../Components/Navbar";
import MobileMenu from "../Components/MobileMenu";
import HeroSection from "../Components/HeroSection";
import { useState } from "react";
import Footer from "../Components/Footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navbar />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroSection />
      <Footer/>
    </div>
  );
}
