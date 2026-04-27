import { ResizablePanelGroup, ResizablePanel } from "@/ui/resizable";
import { Header } from "@/components/Header";
import { AppSidebar } from "@/components/SideBar";
import { SidebarProvider } from "@/ui/sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function LayoutHome() {
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(
    null,
  );
  const [selectedAccountName, setSelectedAccountName] = useState<string | null>(
    null,
  );
  const isMobile = useIsMobile();

  return (
    <SidebarProvider className="h-screen ">
      <div className="flex flex-col h-full w-full ">
        <Header
          onAccountSelect={(accountId) => setSelectedAccountId(accountId)}
          accountSelected={(accountName) => setSelectedAccountName(accountName)}
        />

        <ResizablePanelGroup
          orientation="horizontal"
          className="flex-1 overflow-hidden"
        >
          {!isMobile && (
            <ResizablePanel defaultSize={"20%"} minSize={"20%"} maxSize={"50%"}>
              <AppSidebar
                onAccountSelect={(accountId) => setSelectedAccountId(accountId)}
                isMobile={false}
                accountSelected={(accountName) =>
                  setSelectedAccountName(accountName)
                }
              />
            </ResizablePanel>
          )}

          {!isMobile && (
            <ResizablePanel>
              <main className="h-full">
                <Outlet context={{ selectedAccountId, selectedAccountName }} />
              </main>
            </ResizablePanel>
          )}
        </ResizablePanelGroup>
        {isMobile && (
          <main className="h-full">
            <Outlet context={{ selectedAccountId, selectedAccountName }} />
          </main>
        )}
      </div>
    </SidebarProvider>
  );
}
