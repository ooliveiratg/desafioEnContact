import type { ICard } from "@/interfaces/components/Card/interface";
import { Button } from "@/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";

export function Card({ accountData, removed, selectAccounted }: ICard) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [checked, setChecked] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const isSelecting = checked.length > 0;
  const toggleCheck = (index: number) => {
    setChecked((itens) =>
      itens.includes(index)
        ? itens.filter((id) => id !== index)
        : [...itens, index],
    );
  };
  const { theme } = useTheme();
  const borderClass =
    theme === "light" ? "border-b border-black/60" : "border-b border-white";
  const checkBtnClass = theme === "light" ? "bg-black/90" : "bg-white/10";
  const getCardBackground = (index: number) => {
  if (active === index) return "bg-cards-hover"
  if (checked.includes(index) && !active) return "bg-white/10 hover:bg-white/10"
  return "hover:bg-white/10 bg-transparent"
}
  return (
    <>
      {accountData && !removed ? (
        accountData.subMenuItems.map((subItem, index) => (
          <div
            key={index}
            onClick={() =>
              setActive(
                checked.length === 0 ? (active === index ? null : index) : null,
              )
            }
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`px-[16px] py-[16px] group ${borderClass}  ${
              getCardBackground(index)
            } flex flex-row items-center gap-[16px]`}
          >
            {!isSelecting || checked.length === 0 ? (
              hovered !== index ? (
                <div className="w-[50px] h-[50px] group-hover:opacity-0 transition-opacity duration-200 bg-gradient-button rounded-full flex items-center justify-center">
                  <h4 className="text-white   uppercase text-[14px]">
                    {subItem.owner}{" "}
                  </h4>
                </div>
              ) : (
                <Button
                  onClick={() => setChecked([index])}
                  className={`flex items-center justify-center rounded-full ${checkBtnClass} group-hover:opacity-100 transition-opacity duration-200 cursor-pointer`}
                >
                  <RiCheckboxBlankCircleLine color={"#FF4800"} />
                </Button>
              )
            ) : (
              <Button
                onClick={() => toggleCheck(index)}
                className={`flex items-center justify-center rounded-full ${checkBtnClass} cursor-pointer `}
              >
                <RiCheckboxBlankCircleFill
                  color={
                    checked.includes(index)
                      ? "#FF4800"
                      : "rgba(255,255,255,0.5)"
                  }
                />
              </Button>
            )}
            <div className="flex flex-col gap-[2px] w-full">
              <h2 className="font-bold text-[16px] ">{subItem.name}</h2>
              <p className="font-semibold text-[14px]">{subItem.subject}</p>
              <div className="flex flex-row w-full justify-between">
                <p className=" text-[14px] font-normal">{selectAccounted}</p>
                <div className="flex flex-row gap-[5px]">
                  {subItem.users.slice(0, 3).map((user, userIndex) => (
                    <div
                      key={userIndex}
                      className="w-[40px] h-[40px] bg-gradient-button rounded-full flex items-center justify-center"
                    >
                      <h4 className="text-white  uppercase text-[14px]">
                        {user}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="  pl-[16px] text-[18px] font-bold">
          Selecione uma conta para visualizar as mensagens
        </p>
      )}
    </>
  );
}
