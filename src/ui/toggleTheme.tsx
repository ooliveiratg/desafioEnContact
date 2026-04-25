import { IconToggle } from "@/utils/iconToggle";
import { useTheme } from "next-themes";
import { RiMoonClearLine } from "react-icons/ri";
import { WiDaySunny } from "react-icons/wi";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  
  const currentTheme = theme ?? "light";
  return (
    <IconToggle
    initialState={currentTheme === "light"}
      iconOpen={
        <div className="flex w-10 h-10 items-center justify-center rounded-full bg-[#FF7700]">
          <WiDaySunny size={30} color="black" />
        </div>
      }
      iconClose={
        <div className="flex p-[8px] items-center justify-center rounded-full bg-[rgba(80,132,255,0.3)]">
          <RiMoonClearLine size={30} color="white" />
        </div>
      }
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
    />
  );
}
