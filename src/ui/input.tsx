import { cn } from "@/lib/utils";
import type { InputProps } from "@/interfaces/ui/inputUI/interfaces";

function Input({ className, type, iconLeft, iconRight, ...props }: InputProps) {
  return (
    <div className="flex h-[57px] px-[16px] bg-white border rounded-xl items-center gap-2 border-[#C7C4D7]">
      {iconLeft}

      <input
        type={type}
        className={cn(
          "h-8 w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground",
          className,
        )}
        {...props}
      />

      {iconRight}
    </div>
  );
}

export { Input };
