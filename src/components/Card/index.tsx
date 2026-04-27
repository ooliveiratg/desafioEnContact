import type { ICard } from "@/interfaces/components/Card/interface";
import { Button } from "@/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";

export function Card({ accountData, removed }: ICard) {
  const [hoveredMessageId, setHoveredMessageId] = useState<number | null>(null);
  const [checkedMessages, setCheckedMessages] = useState<number[]>([]);
  const [isButtonsSelected, setIsButtonsSelected] = useState(false);
  const [activeContainer, setActiveContainer] = useState<number | null>(null);
  const {theme} = useTheme();
  const menuAccount = localStorage.getItem("selectedAccount");
  return (
    <>
      {accountData && !removed ? (
        accountData.subMenuItems.map((subItem, index) => (
          <div
            key={index}
            onClick={() =>
              setActiveContainer(
                checkedMessages.length === 0
                  ? activeContainer === index
                    ? null
                    : index
                  : null,
              )
            }
            onMouseEnter={() => setHoveredMessageId(index)}
            onMouseLeave={() => setHoveredMessageId(null)}
            className={`px-[16px] py-[16px] group ${theme === "light" ? "border-b border-black/60" : "border-b border-white"}  ${
              activeContainer === index
                ? "bg-cards-hover"
                : checkedMessages.includes(index) && !activeContainer
                  ? "bg-white/10 hover:bg-white/10"
                  : "hover:bg-white/10 bg-transparent"
            } flex flex-row items-center gap-[16px]`}
          >
            {!isButtonsSelected || checkedMessages.length === 0 ? (
              hoveredMessageId !== index ? (
                <div className="w-[50px] h-[50px] group-hover:opacity-0 transition-opacity duration-200 bg-gradient-button rounded-full flex items-center justify-center">
                  <h4 className="text-white   uppercase text-[14px]">
                    {subItem.owner}{" "}
                  </h4>
                </div>
              ) : (
                <Button
                  onClick={() => {
                    setIsButtonsSelected(true);
                    setCheckedMessages([index]);
                  }}
                  className={`flex items-center justify-center rounded-full ${theme === "light" ? "bg-black/90" : "bg-white/10"} group-hover:opacity-100 transition-opacity duration-200 cursor-pointer`}
                >
                  <RiCheckboxBlankCircleLine color={"#FF4800"} />
                </Button>
              )
            ) : (
              <Button
                onClick={() => {
                  if (checkedMessages.includes(index)) {
                    setCheckedMessages(
                      checkedMessages.filter((id) => id !== index),
                    );
                  } else {
                    setCheckedMessages([...checkedMessages, index]);
                  }
                }}
                className={`flex items-center justify-center rounded-full ${theme === "light" ? "bg-black/90" : "bg-white/10"} cursor-pointer `}
              >
                <RiCheckboxBlankCircleFill
                  color={
                    checkedMessages.includes(index)
                      ? "#FF4800"
                      : "rgba(255,255,255,0.5)"
                  }
                />
              </Button>
            )}
            <div className="flex flex-col gap-[2px] w-full">
              <h2 className="font-bold text-[16px] ">
                {subItem.name}
              </h2>
              <h3 className="font-semibold text-[14px]">{subItem.subject}</h3>
              <div className="flex flex-row w-full justify-between">
                <p className=" text-[14px] font-normal">
                  {menuAccount}
                </p>
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
        <h1 className="  pl-[16px] text-[18px] font-bold">
          Selecione uma conta para visualizar as mensagens
        </h1>
      )}
    </>
  );
}
