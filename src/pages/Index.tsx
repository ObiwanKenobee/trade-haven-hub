import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { MarketData } from "@/components/MarketData";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <MarketData />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;