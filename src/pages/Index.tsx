
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
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ProductShowcase from "@/components/ProductShowcase";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import PolotabInspiredSection from "@/components/PolotabInspiredSection";

const Index = () => {
  useEffect(() => {
    document.title = "Servalta POS | Revoluciona tu Restaurante con Tecnología Inteligente";
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <PolotabInspiredSection />
      <StatsSection />
      <Features />
      <ProductShowcase />
      <ProcessSection />
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
