import { CheckCircle2, Globe, Smartphone, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Globe,
    title: "AI-Driven Market Intelligence",
    description: "Real-time trade insights & price predictions powered by advanced AI algorithms.",
  },
  {
    icon: CheckCircle2,
    title: "Decentralized Trading",
    description: "Buy, sell, and trade transparently without middlemen on our secure platform.",
  },
  {
    icon: DollarSign,
    title: "Trade Financing & AI Credit",
    description: "Access instant AI-based microloans to grow your trading business.",
  },
  {
    icon: Smartphone,
    title: "Offline Access",
    description: "Trade seamlessly via SMS - no smartphone required!",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Kifaru Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-kifaru-purple/10 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-kifaru-purple" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};