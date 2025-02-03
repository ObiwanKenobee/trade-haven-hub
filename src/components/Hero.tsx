import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-kifaru-purple/5 to-kifaru-orange/5">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-kifaru-purple to-kifaru-orange bg-clip-text text-transparent animate-fade-up">
          AI-Powered Trade for Africa
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
          Empowering farmers, traders, and businesses with AI-driven trade, decentralized finance, and real-time market insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up [animation-delay:400ms]">
          <Button size="lg" className="bg-kifaru-purple hover:bg-kifaru-purple/90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};