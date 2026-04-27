import { Button } from "@/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppSidebar } from "../SideBar";
import type { IGlobalOnAccountSelect } from "@/interfaces/global/interface";
import { SidebarProvider } from "@/ui/sidebar";
export function MobileSidebar({
  onAccountSelect,
  accountSelected,
}: IGlobalOnAccountSelect) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <GiHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <SidebarProvider className="h-full w-full px-[16px]">
          <div className="h-full w-full">
            <AppSidebar
              onAccountSelect={onAccountSelect}
              isMobile
              accountSelected={accountSelected}
            />
          </div>
        </SidebarProvider>
      </SheetContent>
    </Sheet>
  );
}
