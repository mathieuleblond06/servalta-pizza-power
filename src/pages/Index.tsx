
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ModuleShowcase from "@/components/ModuleShowcase";
import QRFeature from "@/components/QRFeature";
import Urgency from "@/components/Urgency";
import ComparisonSection from "@/components/ComparisonSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Servalta POS | La Revolución Digital para Pizzerías";
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ModuleShowcase />
      <QRFeature />
      <Urgency />
      <ComparisonSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
