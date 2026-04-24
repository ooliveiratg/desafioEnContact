import type { InputProps } from "../../ui/inputUI/interfaces";

export interface ISingIn {
  fields: InputProps[];
  onSubmit: () => void;
  title: string;
  description: string;
  label?: string[];
}
