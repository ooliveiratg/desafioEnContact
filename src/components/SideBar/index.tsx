import { Button } from "@/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/ui/sidebar";
import { useTheme } from "next-themes";
import { FaRegStar } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export function AppSidebar() {
  const { theme } = useTheme();
  const router = useNavigate()
  return (
    <Sidebar>
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
            <SidebarGroup className="flex flex-col gap-[12px] pt-[12px]">
              <SidebarMenu className="flex flex-row w-[full] justify-between items-center">
                <SidebarMenu className="flex flex-row gap-[12px] items-center">
                  <HiMiniUsers size={18} />
                  <h3 className="font-semibold text-[13px] text-white">
                    Conta 1
                  </h3>
                </SidebarMenu>
                <div className="bg-white/10 px-[8px] py-[2px] rounded-full">
                  <p className="font-bold text-[12px]">62</p>
                </div>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarGroup>
          <SidebarFooter className="flex flex-col">
            <div className="flex w-full h-[1px] bg-white mb-[12px]" />
            <SidebarMenu className="flex flex-row gap-[12px] items-center pt-[12px]">
              <Button variant={"ghost"} className="cursor-pointer" onClick={() => router("/")}>
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
