import type { IForm } from "@/interfaces/components/Form/interface";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { FaArrowRight } from "react-icons/fa6";

export default function Form({
  theme,
  description,
  fields,
  onSubmit,
  title,
  label
}: IForm) {

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className={`max-w-110  md:w-[550px] h-[441px] ${theme === "light" ? "bg-white" : "bg-white/5"} rounded-2xl flex flex-col justify-center items-center gap-8 p-[39px] backdrop-blur-[12px] shadow-[0px_20px_50px_rgba(255,255,255,0.05)]`}
    >
      <div className="flex flex-col gap-[4px] ">
        <h2
          className={`font-inter font-bold text-[40px] text-center lg:text-start w-full ${theme === "light" ? "text-[#131B2E]" : "text-[#5084FF]"}`}
        >
          {title}
        </h2>
        <p className="font-inter text-[18px] font-light text-center ">
          {description}
        </p>
      </div>
      {fields.map((field, index) => (
        <div key={index} className="w-full">
          <Label>{label?.[index]}</Label>
          <Input
            className="w-full h-full focus:outline-none outline-none bg-transparent  text-[16px] font-inter font-normal text-[#6B7280]"
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            onChange={(e) => field.onChange?.(e)}
            iconLeft={field.iconLeft}
            iconRight={field.iconRight}
          />
        </div>
      ))}
      <Button
        type="submit"
        className="w-full flex cursor-pointer gap-[8px] bg-gradient-button h-[48px] text-white items-center justify-center font-inter font-semibold text-[16px]"
      >
        Entrar
        <FaArrowRight />
      </Button>
    </form>
  );
}
