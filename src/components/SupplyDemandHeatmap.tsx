import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map } from "lucide-react";

export const SupplyDemandHeatmap = () => {
  const regions = [
    {
      name: "East Africa",
      supply: "High",
      demand: "Medium",
      topCommodity: "Coffee",
      trend: "↗️ Rising",
    },
    {
      name: "West Africa",
      supply: "Medium",
      demand: "High",
      topCommodity: "Cotton",
      trend: "↗️ Rising",
    },
    {
      name: "Southern Africa",
      supply: "Low",
      demand: "High",
      topCommodity: "Maize",
      trend: "➡️ Stable",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-medium">Supply & Demand Heatmap</CardTitle>
        <Map className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {regions.map((region, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="space-y-1">
                <p className="font-medium">{region.name}</p>
                <div className="flex gap-2 text-sm">
                  <span className="text-muted-foreground">Supply: {region.supply}</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-muted-foreground">Demand: {region.demand}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{region.topCommodity}</p>
                <p className="text-sm text-muted-foreground">{region.trend}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};