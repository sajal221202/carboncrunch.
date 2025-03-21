"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { CubeIcon, ChartIcon, CertificateIcon, BrainIcon } from './Icons';

export default function SolutionsSection() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sustainable Solutions for a Better Future
            </h1>
            <p className="text-xl mb-8">
              Discover how Carbon Crunch can help your business track, reduce and report carbon emissions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              className="bg-green-600 text-white font-semibold text-lg uppercase tracking-wider px-3 py-1 rounded-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Features
            </motion.span>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mt-2 mb-4 text-gray-900 px-3 py-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Why Carbon Crunch?
            </motion.h2>
            {/* <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our platform offers end-to-end solutions for businesses committed to reducing their carbon footprint
              and meeting sustainability goals.
            </motion.p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureCard
              title="Automated Data Collection"
              description="Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting."
              icon={<CubeIcon />}
              delay={0.1}
            />

            <FeatureCard
              title="Monitoring & Reporting"
              description="Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
              icon={<ChartIcon />}
              delay={0.2}
            />

            <FeatureCard
              title="Simplified Certification Process"
              description="Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance."
              icon={<CertificateIcon />}
              delay={0.3}
            />

            <FeatureCard
              title="AI-Driven Insights"
              description="Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
              icon={<BrainIcon />}
              delay={0.4}
            />

            <FeatureCard
              title="Real-time Monitoring"
              description="Monitor your carbon footprint in real-time with our advanced tracking system, enabling immediate response to environmental changes."
              icon={<ChartIcon />}
              delay={0.5}
            />

            <FeatureCard
              title="Predictive Analytics"
              description="Use our predictive analytics to forecast future emissions and plan effective sustainability strategies ahead of time."
              icon={<BrainIcon />}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start Your Sustainability Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of businesses already using Carbon Crunch to reduce their environmental impact
          </motion.p>
        </div>
      </section>
    </>
  );
} 