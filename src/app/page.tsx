"use client";

import Navbar from "../components/Navbar";
import ParallaxSlider from "../components/ParallaxSlider";
import FeaturesSection from "../components/FeaturesSection";
import SolutionsSection from "../components/SolutionsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* First screen - Bell jar with stats */}
        <section id="home" className="h-screen relative overflow-hidden bg-white">
          <div className="relative h-full w-full max-w-[1400px] mx-auto">
            <ParallaxSlider />
            <FeaturesSection />
          </div>
        </section>
        
        {/* Second screen - Solutions content */}
        <section id="features">
          <SolutionsSection />
          <Footer />
        </section>
      </main>
    </>
  );
}
