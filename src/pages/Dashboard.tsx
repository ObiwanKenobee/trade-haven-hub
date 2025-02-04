import { MarketData } from "@/components/MarketData";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Wallet, ArrowUpDown, BrainCircuit, TrendingUp, Users, ShieldCheck } from "lucide-react";
import { AITradeAssistant } from "@/components/AITradeAssistant";
import { LiveTradeFeed } from "@/components/LiveTradeFeed";
import { QuickActions } from "@/components/QuickActions";
import { TradeInsights } from "@/components/TradeInsights";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6 space-y-6">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Trade Dashboard</h1>
            <p className="text-muted-foreground">Welcome to Kifaru Trading</p>
          </div>
          <QuickActions />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Trading Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Traders</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">Across 12 countries</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified Trades</CardTitle>
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892</div>
              <p className="text-xs text-muted-foreground">Last 24 hours</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MarketData />
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