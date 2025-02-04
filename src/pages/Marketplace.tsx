import { DashboardLayout } from "@/components/DashboardLayout";
import { MarketplaceListings } from "@/components/MarketplaceListings";
import { TradeInsights } from "@/components/TradeInsights";
import { AIMarketAssistant } from "@/components/AIMarketAssistant";

const Marketplace = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6 space-y-6">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Marketplace</h1>
            <p className="text-muted-foreground">Discover verified trade opportunities</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MarketplaceListings />
          </div>
          <div className="space-y-6">
            <AIMarketAssistant />
            <TradeInsights />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Marketplace;