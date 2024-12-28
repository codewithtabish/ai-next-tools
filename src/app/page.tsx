"use client"
import AllToolsSection from "@/components/custom/AllToolsSection";
import FeedbackList from "@/components/custom/FeedbackList";
import Footer from "@/components/custom/Footer";
import HeroSection from "@/components/custom/HeroSection";
import LandingToolsList from "@/components/custom/LandingToolsList";
import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto min-h-[100vh] ">
      <HeroSection />
      <AllToolsSection/>
      <LandingToolsList/>
      <FeedbackList/>
      <Footer/>
    </div>
  );
};

export default HomePage;
