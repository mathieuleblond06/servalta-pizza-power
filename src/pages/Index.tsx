
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import PolotabHero from "@/components/PolotabHero";
import PolotabFeatures from "@/components/PolotabFeatures";
import PolotabStats from "@/components/PolotabStats";
import PolotabTestimonials from "@/components/PolotabTestimonials";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ModuleShowcase from "@/components/ModuleShowcase";
import QRFeature from "@/components/QRFeature";
import Urgency from "@/components/Urgency";
import ComparisonSection from "@/components/ComparisonSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  useEffect(() => {
    document.title = "Servalta POS | La Revolución Digital para Restaurantes";
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <PolotabHero />
      <PolotabFeatures />
      <PolotabStats />
      <PolotabTestimonials />
      <Features />
      <ModuleShowcase />
      <QRFeature />
      <Urgency />
      <ComparisonSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
