import type { InputProps } from "@/interfaces/ui/inputUI/interfaces";

export interface IForm {
  theme: string;
  title: string;
  description: string;
  fields: InputProps[];
  onSubmit: () => void;
  label?: string[];
}
