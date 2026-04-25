import { useEffect, useState } from "react";
import type { IIconToggleProps } from "@/interfaces/utils/iconToggle/interface";

export function IconToggle({ ...props }: IIconToggleProps) {
  const [isOpen, setIsOpen] = useState(props.initialState);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(props.initialState);
  }, [props.initialState]);
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
