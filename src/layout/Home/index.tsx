import { ResizablePanelGroup, ResizablePanel } from "@/ui/resizable";
import { Header } from "@/components/Header";
import { AppSidebar } from "@/components/SideBar";
import { SidebarProvider } from "@/ui/sidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export function LayoutHome() {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [ismobile, setIsMobile] = useState(window.innerWidth < 768);
  console.log("selectedAccountdddasdada:", selectedAccount);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <SidebarProvider className="h-screen ">
      <div className="flex flex-col h-full w-full ">
        <Header
          onAccountSelect={(accountId) => setSelectedAccount(accountId)}
        />

        <ResizablePanelGroup
          orientation="horizontal"
          className="flex-1 overflow-hidden"
        >
          {!ismobile && (
            <ResizablePanel defaultSize={"20%"} minSize={"20%"} maxSize={"50%"}>
              <AppSidebar
                onAccountSelect={(accountId) => setSelectedAccount(accountId)}
                isMobile={false}
              />
            </ResizablePanel>
          )}

          {!ismobile && (
            <ResizablePanel>
              <main className="h-full">
                <Outlet context={{ selectedAccount }} />
              </main>
            </ResizablePanel>
          )}
        </ResizablePanelGroup>
        {ismobile && (
          <main className="h-full">
            <Outlet context={{ selectedAccount }} />
          </main>
        )}
      </div>
    </SidebarProvider>
  );
}
