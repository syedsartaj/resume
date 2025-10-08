'use client';

import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';  // Import the Header component
import Qualification from '../components/Qualification';

export default function Page() {
  return (
    <main className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Header />  {/* Add the Header component here */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Qualification />
      <ContactSection />
      <Footer />
    </main>
  );
}
