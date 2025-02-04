import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Smartphone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileAccess = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6 space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Mobile Access</h1>
          <p className="text-muted-foreground">Access Kifaru on any device</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Mobile App</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center p-4">
                <QrCode className="h-32 w-32" />
              </div>
              <Button className="w-full">
                <Smartphone className="mr-2 h-4 w-4" />
                Download App
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SMS Trading</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Trade via SMS when internet access is limited
              </p>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Setup SMS Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MobileAccess;