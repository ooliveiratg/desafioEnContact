
import type React from "react";

export interface IInputUIProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
}
