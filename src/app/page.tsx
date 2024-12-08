"use client"
import AllToolsSection from "@/components/custom/AllToolsSection";
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
      <hr />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt accusamus illo magnam laboriosam, debitis necessitatibus exercitationem labore temporibus dolorum praesentium asperiores culpa molestias recusandae enim fugit quasi sequi officiis atque.
      </p>
      <hr />
      <Footer/>
    </div>
  );
};

export default HomePage;
