import { useTheme } from "next-themes";
import EnContactLogo from "@/assets/png/enContact.png";
import EmailLight from "@/assets/svg/emailLight.svg";
import { MdEmail } from "react-icons/md";
import EmailDark from "@/assets/svg/emailDark.svg";
import Form from "@/components/Form";
import { useSignInForm } from "./useSignInForm";
import { ToggleTheme } from "@/ui/toggleTheme";

export default function SignIn() {
  const { theme } = useTheme();
  const currentTheme = theme ?? "light";
  const data = useSignInForm();
  const emailImage = currentTheme === "light" ? EmailLight : EmailDark;
  return (
    <section className="flex flex-row h-screen overflow-hidden overscroll-none">
      <header className="fixed top-[16px] left-[24px] right-[24px] z-10 flex items-center justify-between">
        <img src={EnContactLogo} alt="EnContact Logo" className="w-16 h-16" />
        <ToggleTheme />
      </header>
      <div className="hidden lg:flex flex-1 bg-gradient-form relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[rgba(129,140,248,0.2)] blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-[rgba(255,255,255,0.2)] blur-3xl"></div>
        <div className="flex relative w-full h-full justify-center items-center">
          <div className="flex items-center justify-center gap-[15px] flex-col max-w-[441px]">
            <div className="w-[62px] h-14 flex justify-center items-center bg-white/10 rounded-xl">
              <MdEmail size={30} color="white" />
            </div>
            <h2 className=" font-bold text-[40px] max-w-98 text-white text-center">
              Domine sua caixa de entrada.
            </h2>
            <p className=" text-[18px] font-light text-center text-white">
              Comunicação de alto crescimento para equipes modernas. Segura,
              rápida e incrivelmente intuitiva.
            </p>

              <img src={emailImage} alt="Ilustração de email" className="max-w-[233px] max-h-[214px]" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 bg-bg-form justify-center items-center px-4 overflow-hidden">
        <Form theme={currentTheme} {...data} />
      </div>
    </section>
  );
}
