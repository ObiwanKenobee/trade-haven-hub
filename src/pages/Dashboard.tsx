import { DashboardLayout } from "@/components/DashboardLayout";
import { AITradeAssistant } from "@/components/AITradeAssistant";
import { LiveTradeFeed } from "@/components/LiveTradeFeed";
import { QuickActions } from "@/components/QuickActions";
import { TradeInsights } from "@/components/TradeInsights";
import { RealTimeMarketAnalytics } from "@/components/RealTimeMarketAnalytics";
import { AITradeRecommendations } from "@/components/AITradeRecommendations";
import { SupplyDemandHeatmap } from "@/components/SupplyDemandHeatmap";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, ShieldCheck } from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Trade Dashboard</h1>
            <p className="text-muted-foreground">Welcome to Kifaru Trading</p>
          </div>
          <QuickActions />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Card className="p-6">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">Total Trading Volume</p>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </Card>
          <Card className="p-6">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">Active Traders</p>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Across 12 countries</p>
          </Card>
          <Card className="p-6 md:col-span-2 lg:col-span-1">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">Verified Trades</p>
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RealTimeMarketAnalytics />
          <AITradeRecommendations />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SupplyDemandHeatmap />
          </div>
          <div className="space-y-6">
            <AITradeAssistant />
            <TradeInsights />
            <LiveTradeFeed />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;