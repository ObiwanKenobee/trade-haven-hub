import { SidebarProvider } from "@/components/ui/sidebar";
import { BuildSidebar } from "@/components/BuildSidebar";
import { BuildContent } from "@/components/BuildContent";

const Build = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <BuildSidebar />
        <BuildContent />
      </div>
    </SidebarProvider>
  );
};

export default Build;