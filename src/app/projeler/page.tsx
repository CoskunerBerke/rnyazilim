import React from "react";
import { Metadata } from "next";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description: "RN Yazılım olarak kurumsal firmalar, e-ticaret markaları ve girişimler için hayata geçirdiğimiz dijital teknoloji projeleri ve vaka analizleri.",
  alternates: {
    canonical: "/projeler",
  },
};

export default function ProjectsPage() {
  return (
    <div className="py-8 bg-bg-dark">
      {/* Reusing our highly-optimized, interactive ProjectsSection */}
      <ProjectsSection />
    </div>
  );
}
