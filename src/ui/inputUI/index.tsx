import type { IInputUIProps } from "../../interfaces/ui/inputUI/interfaces";

export function InputUI({ ...props }: IInputUIProps) {
  return (
    props.label && (
      <div className="flex flex-col w-full gap-1">
        <label className="font-inter font-semibold text-[14px]">{props.label}</label>
        <div className="flex h-[57px] px-[16px] bg-white border rounded-xl items-center border-[#C7C4D7]">
          {props.iconLeft && props.iconLeft}
          <input
            className="w-full h-full focus:outline-none bg-transparent pl-[16px] text-[16px] font-inter font-normal"
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
          />
          {props.iconRight && props.iconRight}
        </div>
      </div>
    )
  );
}
