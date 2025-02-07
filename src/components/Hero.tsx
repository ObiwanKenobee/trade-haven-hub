import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { gsap } from "gsap";

export const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-content > *", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      <div className="container px-4 mx-auto text-center hero-content">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-kifaru-purple to-kifaru-orange bg-clip-text text-transparent">
          AI-Powered Trade for Africa
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Empowering farmers, traders, and businesses with AI-driven trade, decentralized finance, and real-time market insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-kifaru-purple hover:bg-kifaru-purple/90 group transition-all duration-300"
            onClick={() => {
              gsap.to(window, {
                duration: 1,
                scrollTo: "#features",
                ease: "power2.inOut"
              });
            }}
          >
            Get Started 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-kifaru-orange text-kifaru-orange hover:bg-kifaru-orange/10"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};