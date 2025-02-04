import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

export const AITradeAssistant = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-medium">AI Trade Assistant</CardTitle>
        <BrainCircuit className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Market Opportunity</h4>
            <p className="text-sm text-muted-foreground">
              Coffee prices are trending up in Ethiopia. Consider securing contracts now.
            </p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Risk Alert</h4>
            <p className="text-sm text-muted-foreground">
              Weather patterns may affect maize production in Kenya next month.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};