import EnContact from "@/assets/png/enContact.png";
import { Input } from "@/ui/input";
import { ToggleTheme } from "@/ui/toggleTheme";
import { IoSearch } from "react-icons/io5";
import { DropdownMenuAvatar } from "@/ui/dropdownMenuAvatar";
import { useTheme } from "next-themes";
import { MobileSidebar } from "../MobileSidebar";
import { useEffect, useState } from "react";
import type { IGlobalOnAccountSelect } from "@/interfaces/global/interface";

export function Header({ onAccountSelect }: IGlobalOnAccountSelect) {
  const { theme } = useTheme();
  const [ismobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize();
  }, []);
  return (
    <header
      className={`w-full pt-[9px] px-[24px] bg-bg-header flex flex-row items-center justify-between shadow-header ${theme === "light" ? "border-b border-black/40" : "border-b border-white/20"}`}
    >
      <div className="flex flex-row gap-[32px] items-center">
        <img
          src={EnContact}
          alt="Logo da EnContact"
          className="w-[80px] h-[80px]"
        />
        <div className="md:hidden">
          <MobileSidebar onAccountSelect={onAccountSelect} />
        </div>
        {!ismobile && (
          <Input
            iconLeft={<IoSearch color="#94A3B8" size={18} />}
            placeholder="Pesquisar conversas..."
            typeInputWithIcon="secondary"
            icon={true}
            className="border-none focus:outline-none focus:ring-0 focus:border-transparent"
          />
        )}
      </div>
      <div className="flex flex-row gap-[32px] items-center">
        <ToggleTheme />
        <DropdownMenuAvatar />
      </div>
    </header>
  );
}
