"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ParallaxSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center"
    >
      {/* Main image container with bell jar effect */}
      <div className="relative w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] h-[90vh] mx-auto bg-white overflow-hidden">
        <Image
          src="/images/earth.png"
          alt="Earth in a bell jar with industrial pollution"
          fill
          priority
          sizes="(max-width: 640px) 600px, (max-width: 768px) 600px, 700px"
          className="object-contain absolute left-[-30px] sm:left-[-50px] md:left-[-60px]"
          style={{ objectPosition: "center", backgroundColor: "white" }}
        />
      </div>
    </div>
  );
} 