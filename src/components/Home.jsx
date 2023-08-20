import React from "react";
import MusicTheories from "./MusicTheories";
import AboutSection from "./AboutSection";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row  text-2xl font-semibold">
      <MusicTheories />
      <AboutSection />
    </div>
  );
};

export default Home;
