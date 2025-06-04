"use client";

import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import CoreServices from "@/components/CoreServices";
import Footer from "@/components/Footer";
import HeroContent from "@/components/HeroContent";
import QuarterlyReport from "@/components/QuarterlyReport";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import ThemeToggle from "@/components/theme/theme-toggle";
import TransformationSection from "@/components/TransformationSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full min-h-screen font-sans bg-white dark:bg-gray-900 text-navy-900 dark:text-white'>
      {/* Theme Toggle */}
      <div className='fixed bottom-8 right-8 z-50'>
        <ThemeToggle />
      </div>
      {/* Hero Section */}

      <header className='bg-navy-900 text-white'>
        {/* Navigation Bar */}
        <nav className='border-b border-white/10'>
          <div className='max-w-6xl mx-auto px-4 py-4'>
            <div className='flex justify-between items-center'>
              {/* Logo Section */}
              <div className='flex items-center gap-3'>
                <Image
                  alt='TheoElect Logo'
                  priority
                  width={60}
                  height={60}
                  src='/logo.png'
                  className='object-contain'
                />
                <div className='flex flex-col'>
                  <h1 className='font-bold text-2xl tracking-wide'>
                    TheoElect
                  </h1>
                  <p className='text-sm tracking-widest text-gold-500'>
                    Consulting
                  </p>
                </div>
              </div>

              {/* Contact Button */}
              <button className='bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium py-2 px-6 rounded-lg transition-all'>
                <a href='mailto:theoelect@yahoo.com?subject=Consultation Request&body=Please provide details about your consultation needs.'>
                  Contact Us
                </a>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <HeroContent />
      </header>

      {/* About Us */}
      <AboutUs />

      {/* Core Services */}
      <CoreServices />

      {/* Transformation Section */}
      <TransformationSection />

      {/* QuarterlyReports */}
      <QuarterlyReport />

      {/* Team Section */}
      <TeamSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
