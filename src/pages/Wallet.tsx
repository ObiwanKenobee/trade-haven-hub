import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet2, ArrowUpDown, History } from "lucide-react";
import { Button } from "@/components/ui/button";

const Wallet = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6 space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Wallet</h1>
          <p className="text-muted-foreground">Manage your digital assets</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg font-medium">Balance</CardTitle>
              <Wallet2 className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,345.67</div>
              <p className="text-xs text-muted-foreground">Available for trading</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Transfer Funds
              </Button>
              <Button variant="outline" className="w-full">
                <History className="mr-2 h-4 w-4" />
                Transaction History
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Wallet;