import EnContact from "@/assets/png/enContact.png";
import { Input } from "@/ui/input";
export function Header() {
  return (
    <header className="w-full pt-[9px] px-[24px] fixed z-20 bg-bg-header flex flex-row items-center justify-between">
      <div className="flex flex-row gap-[32px] items-center">
        <img
          src={EnContact}
          alt="Logo da EnContact"
          className="w-[48px] h-[48px]"
        />
        <Input icon={false} className="bg-white/5 border-none focus:outline-none focus:ring-0 focus:border-transparent"/>
      </div>
      <div className="flex flex-row gap-[32px] items-center">
        <p className="text-[16px] font-medium text-[#131B2E]">Home</p>
        <p className="text-[16px] font-medium text-[#131B2E]">Contato</p>
        <p className="text-[16px] font-medium text-[#131B2E]">Sobre</p>
      </div>

    </header>
  );
}
