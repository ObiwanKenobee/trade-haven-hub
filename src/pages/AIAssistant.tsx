import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AITradeAssistant } from "@/components/AITradeAssistant";
import { MarketData } from "@/components/MarketData";

const AIAssistant = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6 space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">AI Trade Assistant</h1>
          <p className="text-muted-foreground">Get AI-powered insights and recommendations</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MarketData />
          </div>
          <div className="space-y-6">
            <AITradeAssistant />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AIAssistant;