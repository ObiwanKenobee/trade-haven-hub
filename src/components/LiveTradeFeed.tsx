import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

export const LiveTradeFeed = () => {
  const trades = [
    {
      id: 1,
      type: "Sale",
      commodity: "Coffee",
      amount: "2,000 kg",
      price: "$6,400",
      time: "2 min ago",
    },
    {
      id: 2,
      type: "Purchase",
      commodity: "Maize",
      amount: "5,000 kg",
      price: "$2,300",
      time: "5 min ago",
    },
    {
      id: 3,
      type: "Sale",
      commodity: "Cotton",
      amount: "1,500 kg",
      price: "$4,200",
      time: "12 min ago",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-medium">Live Trade Feed</CardTitle>
        <Activity className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trades.map((trade) => (
            <div key={trade.id} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors">
              <div>
                <p className="font-medium">{trade.type}</p>
                <p className="text-sm text-muted-foreground">
                  {trade.commodity} - {trade.amount}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{trade.price}</p>
                <p className="text-sm text-muted-foreground">{trade.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};