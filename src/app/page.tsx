import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TechCapabilitiesSection from "@/components/sections/TechCapabilitiesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Services Grid */}
      <ServicesSection />

      {/* 3. Why Us Section */}
      <WhyUsSection />

      {/* 4. Projects Portfolio Section */}
      <ProjectsSection />

      {/* 5. Interative Process Timeline */}
      <ProcessSection />

      {/* 6. Technical Stack & Capabilities */}
      <TechCapabilitiesSection />

      {/* 7. FAQ Accordions */}
      <FAQSection />

      {/* 8. Contact Form Area */}
      <ContactSection />

      {/* 9. Bottom CTA random links Banner */}
      <CTABanner />
    </>
  );
}
