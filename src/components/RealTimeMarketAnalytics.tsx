import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useQuery } from "@tanstack/react-query";

const mockData = [
  { time: "09:00", coffee: 320, cotton: 240, maize: 180 },
  { time: "10:00", coffee: 350, cotton: 250, maize: 190 },
  { time: "11:00", coffee: 340, cotton: 245, maize: 195 },
  { time: "12:00", coffee: 360, cotton: 260, maize: 200 },
  { time: "13:00", coffee: 380, cotton: 270, maize: 205 },
];

export const RealTimeMarketAnalytics = () => {
  const { data = mockData, isLoading } = useQuery({
    queryKey: ["marketPrices"],
    queryFn: async () => {
      // In a real implementation, this would fetch from your API
      return mockData;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Real-Time Market Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="coffee" stroke="#8B5CF6" name="Coffee" />
              <Line type="monotone" dataKey="cotton" stroke="#10B981" name="Cotton" />
              <Line type="monotone" dataKey="maize" stroke="#F59E0B" name="Maize" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};