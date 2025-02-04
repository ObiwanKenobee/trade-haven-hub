import { Button } from "@/components/ui/button";
import { ShoppingBag, TrendingUp, Wallet } from "lucide-react";

export const QuickActions = () => {
  return (
    <div className="flex gap-4">
      <Button variant="default">
        <ShoppingBag className="mr-2 h-4 w-4" />
        Quick Trade
      </Button>
      <Button variant="outline">
        <Wallet className="mr-2 h-4 w-4" />
        Get Financing
      </Button>
      <Button variant="outline">
        <TrendingUp className="mr-2 h-4 w-4" />
        View Insights
      </Button>
    </div>
  );
};