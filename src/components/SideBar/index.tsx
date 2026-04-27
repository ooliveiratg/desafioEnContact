import { Button } from "@/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/ui/sidebar";
import { useTheme } from "next-themes";
import { FaRegStar } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/collapsible";
import { MenusAccount } from "@/services/menusAccount";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import type { IMenusAccount } from "@/interfaces/services/interface";
import Inbox from "@/assets/svg/inbox.svg";
import type { IAppSidebar } from "@/interfaces/components/Sidebar/interface";

export function AppSidebar({ onAccountSelect }: IAppSidebar) {
  const { theme } = useTheme();
  const router = useNavigate();
  const [menuData, setMenuData] = useState<IMenusAccount[] | undefined>(
    undefined,
  );

  useEffect(() => {
    async function fetchMenu() {
      const response = await MenusAccount();
      if (!response.success) {
        toast.error(response.message || "Erro ao buscar os menus");
        return;
      }
      setMenuData(response.data);
    }

    fetchMenu();
  }, []);
  return (
    <Sidebar
      className={
        theme === "light"
          ? "border-l border-black/60"
          : "border-r border-[#E2E8F0]/10"
      }
    >
      <SidebarHeader>
        <h2
          className={`font-bold text-[#0F172A] text-[22px] ${theme === "light" ? "text-[#0F172A]" : "text-[#5084FF]"}`}
        >
          Caixa de entrada
        </h2>
        <p
          className={`font-medium text-[14px] ${theme === "light" ? "text-[#64748B]" : "text-[#FFFFFF]"}`}
        >
          Painel de suporte
        </p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="flex flex-col pt-[32px]">
          <SidebarGroup>
            <SidebarMenu className="flex flex-row w-[full] justify-between items-center">
              <SidebarMenu className="flex flex-row gap-[12px] items-center">
                <FaRegStar size={18} />
                <h3 className="font-semibold text-[13px] text-white">Total</h3>
              </SidebarMenu>
              <p className="font-bold text-[12px]">62</p>
            </SidebarMenu>
            <SidebarGroupLabel className="text-[#94A3B8] text-[12px] uppercase font-bold">
              Accounts
            </SidebarGroupLabel>
            {menuData &&
              menuData.map((itens, index) => (
                <Collapsible key={index} defaultOpen className="pt-[12px]">
                  <CollapsibleTrigger
                    asChild
                    className="flex flex-col  min-w-full "
                  >
                    <SidebarMenuButton className="flex flex-row w-[full] gap-[12px] justify-between items-center">
                      <SidebarMenu className="flex flex-row gap-[12px] items-center">
                        <HiMiniUsers size={18} />
                        <h3 className="font-semibold text-[13px] text-white">
                          {itens.name}
                        </h3>
                      </SidebarMenu>
                      <div className="bg-white/10 px-[8px] rounded-full">
                        <p className="font-bold text-[12px]">62</p>
                      </div>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    {itens.subMenus.map((subItens, subIndex) => (
                      <SidebarMenuSub key={subIndex}>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            onClick={() => {
                              onAccountSelect(subItens.id.toString());
                            }}
                          >
                            <span>{subItens.name}</span>
                            <span className="ml-auto">15</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            <SidebarMenu className="bg-gradient-button px-[12px] py-[8px] mt-[12px] rounded-[8px]">
              <div className="flex flex-row gap-[12px]">
                <img src={Inbox} alt="Inbox" />
                <h4 className="font-semibold text-[13.9px] text-[#FDFEFF]">
                  Inbox
                </h4>
              </div>
            </SidebarMenu>
          </SidebarGroup>

          <SidebarFooter className="flex flex-col">
            <div className="flex w-full h-[1px] bg-white mb-[12px]" />
            <SidebarMenu className="flex flex-row gap-[12px] items-center pt-[12px]">
              <Button
                variant={"ghost"}
                className="cursor-pointer"
                onClick={() => router("/")}
              >
                <RxExit size={18} color="#FF0000" />
                <h3 className="font-semibold text-[13px] text-[#FF0000]">
                  Sair
                </h3>
              </Button>
            </SidebarMenu>
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
