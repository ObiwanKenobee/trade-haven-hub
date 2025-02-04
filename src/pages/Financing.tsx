import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, Calculator, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Financing = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6 space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Trade Financing</h1>
          <p className="text-muted-foreground">Access DeFi loans and financing options</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg font-medium">Credit Score</CardTitle>
              <ChartBar className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">785</div>
              <p className="text-xs text-muted-foreground">AI-powered credit rating</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Loans</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">
                <BadgeDollarSign className="mr-2 h-4 w-4" />
                Apply for Microloan
              </Button>
              <Button variant="outline" className="w-full">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Rates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Financing;