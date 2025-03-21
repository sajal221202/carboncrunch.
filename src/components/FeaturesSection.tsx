"use client";
import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { CubeIcon, ChartIcon, CertificateIcon, BrainIcon } from './Icons';

interface StatBlockProps {
  percentage: string;
  description: string;
  position: string;
  bgColor: string;
  textColor: string;
  width?: string;
  height?: string;
}

const StatBlock = ({ percentage, description, position, bgColor, textColor, width = "max-w-[320px]" }: StatBlockProps) => {
  return (
    <div className={`absolute ${position} z-10`}>
      <motion.div
        className={`${bgColor} ${textColor} p-6 rounded-lg shadow-lg ${width}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-6xl font-bold mb-3">{percentage}</h2>
        <p className="text-xl font-medium leading-tight">{description}</p>
      </motion.div>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="absolute inset-0 w-screen h-screen pointer-events-none">
       {/* 37% - White box on bottom left */}
       <StatBlock
        percentage="37%"
        bgColor="bg-white"
        textColor="text-black"
        position="bottom-[15%] left-[50%]"
        width="max-w-[450px]"
        height='max-h-[200px]'
        description="Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track"
      />


      {/* 18% - Gray box on lower right */}
      <StatBlock
        percentage="18%"
        bgColor="bg-gray-700"
        textColor="text-white"
        position="top-[50%] left-[70%] md:right-[12%] lg:right-[15%]"
        width="max-w-[300px]"
        description="Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050"
      />

      {/* 98% - Gray box overlapping jar on right side */}
      <StatBlock
        percentage="98%"
        bgColor="bg-gray-500"
        textColor="text-white"
        position="top-[32%] right-[20%] left-[53%] md:right-[6%] lg:right-[8%]"
        width="max-w-[450px]"
        description="Of CEOs Agree Sustainability Is Their Responsibility"
      />

      {/* 3X - Green box at top right */}
      <StatBlock
        percentage="3X"
        bgColor="bg-green-500"
        textColor="text-black"
        position="top-[15%] right-[10%] left-[69%] md:right-[20%] lg:right-[12%]"
        width="max-w-[500px]"
        height="max-h-[350px]"
        description="ESG High Performers Deliver A Higher Total Shareholder Return"
      />





     
    </section>
  );
} 