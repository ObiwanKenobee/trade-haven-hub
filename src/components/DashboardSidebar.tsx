import { Home, LineChart, ShoppingBag, BrainCircuit, Wallet, BadgeDollarSign, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  { icon: Home, label: "Overview", path: "/dashboard" },
  { icon: ShoppingBag, label: "Marketplace", path: "/dashboard/marketplace" },
  { icon: LineChart, label: "Trade Insights", path: "/dashboard/insights" },
  { icon: BrainCircuit, label: "AI Assistant", path: "/dashboard/ai" },
  { icon: Wallet, label: "Wallet", path: "/dashboard/wallet" },
  { icon: BadgeDollarSign, label: "Financing", path: "/dashboard/financing" },
  { icon: Smartphone, label: "Mobile Access", path: "/dashboard/mobile" },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 border-r bg-card min-h-screen p-4 hidden md:block">
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            className={cn(
              "w-full justify-start",
              location.pathname === item.path && "bg-accent"
            )}
            asChild
          >
            <Link to={item.path}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
};