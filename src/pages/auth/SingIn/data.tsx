import { HiMiniAtSymbol } from "react-icons/hi2";
import type { ISingIn } from "../../../interfaces/pages/SingIn/interfaces";
import { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { IconToggle } from "@/utils/iconToggle";
import { toast } from "sonner";

export function DataForm(): ISingIn {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const handleSubmitForm = () => {
    if(!email || !password) {
      toast.info("Preencha todos os campos");
      return;
    }
    if(email === "admin@admin" && password === "admin") {
      toast.success("Login realizado com sucesso!");
    } else {
      toast.error("Email ou senha incorretos");
    }
  };

  return {
    fields: [
      {
        onChange: (e) => setEmail(e.target.value),
        type: "email",
        placeholder: "name@company.com",
        iconLeft: <HiMiniAtSymbol size={20} color="rgba(9,9,9,0.45)" />,
        value: email,
      },
      {
        onChange: (e) => setPassword(e.target.value),
        type: visible ? "text" : "password",
        placeholder: "********",
        iconLeft: <MdLockOutline size={20} color="rgba(9,9,9,0.45)" />,
        iconRight: (
          <IconToggle
            onClick={() => setVisible(!visible)}
            iconOpen={<LuEye size={20} color="rgba(9,9,9,0.45)" />}
            iconClose={<LuEyeClosed size={20} color="rgba(9,9,9,0.45)" />}
          />
        ),
        value: password,
      },
    ],
    label: ["Email", "Senha"],
    onSubmit: () => handleSubmitForm(),
    title: "Bem vindo",
    description: "Insira suas credenciais para acessar seu fluxo.",
  };
}
