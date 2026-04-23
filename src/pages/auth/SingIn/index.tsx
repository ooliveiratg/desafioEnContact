// import { useTheme } from "next-themes";
import EnContactLogo from "../../../assets/encontact_logo-removebg-preview 1.png";
import { MdEmail } from "react-icons/md";

export default function SingIn() {
  //   const { theme, setTheme } = useTheme();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <section className="flex flex-1 flex-row items-center h-full">
        <div className="flex-1 self-stretch bg-gradient-form border border-form relative">
          <img src={EnContactLogo} alt="EnContact Logo" className="w-16 h-16" />
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[rgba(129,140,248,0.2)] blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-[rgba(255,255,255,0.2)] blur-3xl"></div>
          <div className="flex relative w-full h-full justify-center items-center gap-3.75 flex-col">
            <div className="w-15.5 h-14 flex justify-center items-center bg-white/10 rounded-xl">
              <MdEmail size={30} color="white" />
            </div>
            <h2 className="font-bold">Domine sua caixa de entrada.</h2>
          </div>
        </div>

        <div className="flex flex-1"></div>
      </section>
    </div>
  );
}
