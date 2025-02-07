import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export const AITradeRecommendations = () => {
  const recommendations = [
    {
      commodity: "Coffee",
      action: "Buy",
      confidence: "High",
      reason: "Seasonal demand increase expected",
      potential: "+12.5%",
    },
    {
      commodity: "Cotton",
      action: "Hold",
      confidence: "Medium",
      reason: "Price stabilization predicted",
      potential: "+5.2%",
    },
    {
      commodity: "Maize",
      action: "Sell",
      confidence: "High",
      reason: "Supply surplus incoming",
      potential: "-3.8%",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-medium">AI Trade Recommendations</CardTitle>
        <TrendingUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{rec.commodity}</span>
                  <Badge variant={rec.action === "Buy" ? "default" : rec.action === "Sell" ? "destructive" : "secondary"}>
                    {rec.action}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{rec.reason}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-green-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="font-medium">{rec.potential}</span>
                </div>
                <span className="text-xs text-muted-foreground">Confidence: {rec.confidence}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};