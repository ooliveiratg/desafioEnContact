import { useTheme } from "next-themes";
import EnContactLogo from "../../../assets/png/enContact.png";
import EmailLight from "../../../assets/svg/emailLight.svg";
import { MdEmail } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { InputUI } from "../../../ui/inputUI";
import { HiMiniAtSymbol } from "react-icons/hi2";
import { IconToggle } from "../../../utils/iconToggle";
import { RiMoonClearLine } from "react-icons/ri";
import { useState } from "react";

export default function SingIn() {
  const { theme, setTheme } = useTheme();
  const [email, setEmail] = useState("");
  return (
    <section className="flex flex-row  min-h-screen overflow-hidden">
      <header className="fixed top-[16px] left-[24px] right-[24px] z-1 flex items-center justify-between">
        <img src={EnContactLogo} alt="EnContact Logo" className="w-16 h-16" />
        <IconToggle
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
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </header>
      <div className="flex flex-1 bg-gradient-form relative">
        <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[rgba(129,140,248,0.2)] blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-[rgba(255,255,255,0.2)] blur-3xl"></div>
        <div className="flex relative w-full min-h-full justify-center items-center">
          <div className="flex items-center justify-center gap-[15px] flex-col max-w-[441px]">
            <div className="w-[62px] h-14 flex justify-center items-center bg-white/10 rounded-xl">
              <MdEmail
                size={30}
                color="white"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              />
            </div>
            <h2 className="font-inter font-bold text-[40px] max-w-98 text-white text-center">
              Domine sua caixa de entrada.
            </h2>
            <p className="font-inter text-[18px] font-light text-center text-white">
              Comunicação de alto crescimento para equipes modernas. Segura,
              rápida e incrivelmente intuitiva.
            </p>
            <img
              src={EmailLight}
              alt="Email Light"
              className="max-w-[233px] max-h-[214px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 bg-bg-form justify-center items-center">
        <form
          onSubmit={() => {}}
          className={`w-110 h-[441px] ${theme === "light" ? "bg-white" : "bg-white/5"} rounded-2xl flex flex-col justify-center items-center gap-8 p-[39px]`}
        >
          <InputUI
            onChange={(value) => setEmail(value)}
            type="email"
            label="email"
            placeholder="name@company.com"
            iconLeft={<HiMiniAtSymbol size={20} color="rgba(9,9,9,0.45)" />}
            value={email}
          />
        </form>
      </div>
    </section>
  );
}
