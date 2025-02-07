import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { MarketData } from "@/components/MarketData";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { KifaruScene } from "@/components/KifaruScene";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <KifaruScene />
      <div className="relative z-10">
        <Hero />
        <Features />
        <MarketData />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;