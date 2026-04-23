import { useTheme } from "next-themes";
import EnContactLogo from "../../../assets/png/enContact.png";
import EmailLight from "../../../assets/svg/emailLight.svg";
import { MdEmail } from "react-icons/md";

export default function SingIn() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <section className="flex flex-1 flex-row items-center h-full">
        <div className="flex flex-1  min-h-screen bg-gradient-form border border-form relative">
          <img src={EnContactLogo} alt="EnContact Logo" className="w-16 h-16 absolute z-1 left-0" />
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[rgba(129,140,248,0.2)] blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-[rgba(255,255,255,0.2)] blur-3xl"></div>
          <div className="flex relative w-full min-h-full justify-center items-center">
            <div className="flex items-center justify-center gap-3.75 flex-col max-w-110.25">
              <div className="w-15.5 h-14 flex justify-center items-center bg-white/10 rounded-xl">
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

        <div className="flex flex-1"></div>
      </section>
    </div>
  );
}
