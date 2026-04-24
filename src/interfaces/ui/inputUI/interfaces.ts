import type React from "react";

export interface InputProps extends React.ComponentProps<"input"> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  icon: boolean
}
