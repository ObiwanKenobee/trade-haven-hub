import { Button } from "@/components/ui/button";
import { ShoppingBag, TrendingUp, Wallet } from "lucide-react";

export const QuickActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
      <Button variant="default" className="w-full sm:w-auto">
        <ShoppingBag className="mr-2 h-4 w-4" />
        Quick Trade
      </Button>
      <Button variant="outline" className="w-full sm:w-auto">
        <Wallet className="mr-2 h-4 w-4" />
        Get Financing
      </Button>
      <Button variant="outline" className="w-full sm:w-auto">
        <TrendingUp className="mr-2 h-4 w-4" />
        View Insights
      </Button>
    </div>
  );
};