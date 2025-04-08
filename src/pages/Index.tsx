
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import DownloadApp from "@/components/DownloadApp";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactCTA from "@/components/ContactCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <DownloadApp />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
