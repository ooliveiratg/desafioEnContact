import { useState } from "react";
import type { IIconToggleProps } from "@/interfaces/utils/iconToggle/interface";

export function IconToggle({ ...props }: IIconToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
        props.onClick();
      }}
    >
      {isOpen ? props.iconOpen : props.iconClose}
    </button>
  );
}
