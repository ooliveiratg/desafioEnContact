import {
  ResizablePanelGroup,
  ResizablePanel,
} from "@/components/ui/resizable";
import { Header } from "@/components/Header";
import { AppSidebar } from "@/components/SideBar";
import { SidebarProvider } from "@/ui/sidebar";
import { Outlet } from "react-router-dom";

export function LayoutHome() {
  return (
    <SidebarProvider className="h-screen overflow-hidden">
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Header />

        <ResizablePanelGroup orientation="horizontal" className="flex-1 overflow-hidden">
          <ResizablePanel defaultSize={"20%"} minSize={"20%"} maxSize={"50%"}>
            <AppSidebar />
          </ResizablePanel>

          <ResizablePanel>
            <main className="h-full">
              <Outlet />
            </main>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </SidebarProvider>
  );
}
