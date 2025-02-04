import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AIMarketAssistant = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-medium">AI Market Assistant</CardTitle>
        <BrainCircuit className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Market Opportunity</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Coffee prices are trending up in Ethiopia. Consider securing contracts now.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Analysis
            </Button>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Smart Match</h4>
            <p className="text-sm text-muted-foreground mb-4">
              3 verified buyers are looking for organic cotton in your region.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Connect Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};