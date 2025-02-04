import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const TradeInsights = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-medium">Trade Insights</CardTitle>
        <TrendingUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors">
            <div className="space-y-1">
              <p className="text-sm font-medium">Coffee Prices</p>
              <p className="text-xs text-muted-foreground">Ethiopian Arabica</p>
            </div>
            <div className="flex items-center text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+12.5%</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors">
            <div className="space-y-1">
              <p className="text-sm font-medium">Cotton Demand</p>
              <p className="text-xs text-muted-foreground">West African Region</p>
            </div>
            <div className="flex items-center text-red-500">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">-3.2%</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors">
            <div className="space-y-1">
              <p className="text-sm font-medium">Cocoa Supply</p>
              <p className="text-xs text-muted-foreground">Ghana & Ivory Coast</p>
            </div>
            <div className="flex items-center text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+8.7%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};