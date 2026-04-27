import { cn } from "@/lib/utils";
import type { InputProps } from "@/interfaces/ui/inputUI/interfaces";
function Input({
  className,
  type,
  iconLeft,
  iconRight,
  icon,
  typeInputWithIcon,  
  ...props
}: InputProps) {
  return (
    <>
      {icon ? (
        <div className={`flex px-[16px] ${typeInputWithIcon === "primary" ? "bg-white border-[#C7C4D7] h-[57px] rounded-xl" : "bg-white/5 h-[32px] rounded-[8px]"} items-center gap-2 `}>
          {iconLeft}

          <input
            type={type}
            className={cn(
              "h-full w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground",
              className,
            )}
            {...props}
          />

          {iconRight}
        </div>
      ) : (
        <input
          type={type}
          data-slot="input"
          className={cn(
            "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
            className,
          )}
          {...props}
        />
      )}{" "}
    </>
  );
}

export { Input };
