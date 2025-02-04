import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Build from "./pages/Build";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import AIAssistant from "./pages/AIAssistant";
import Wallet from "./pages/Wallet";
import Financing from "./pages/Financing";
import MobileAccess from "./pages/MobileAccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/build" element={<Build />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/marketplace" element={<Marketplace />} />
          <Route path="/dashboard/ai" element={<AIAssistant />} />
          <Route path="/dashboard/wallet" element={<Wallet />} />
          <Route path="/dashboard/financing" element={<Financing />} />
          <Route path="/dashboard/mobile" element={<MobileAccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;