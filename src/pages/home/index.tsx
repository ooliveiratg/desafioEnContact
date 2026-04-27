import type { IAccount } from "@/interfaces/services/interface";
import { AccountsMessage } from "@/services/accountsMessage";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Archive from "@/assets/svg/archive.svg";

import { toast } from "sonner";
import { Button } from "@/ui/button";

export default function Home() {
  const { selectedAccount } = useOutletContext<{
    selectedAccount: string | null;
  }>();
  const [accountData, setAccountData] = useState<IAccount | undefined>(
    undefined,
  );
  const [removed, setRemoved] = useState(false);
  console.log("selectedAccountId home:", selectedAccount);

  
  useEffect(() => {
    if (selectedAccount !== null) {
      async function fetchMenu() {
        const response = await AccountsMessage({ id: Number(selectedAccount) });
        if (!response.success) {
          toast.error(response.message || "Erro ao buscar os menus");
          return;
        }
        console.log("Resposta da dsadsada API:", response);
        setAccountData(response.data);
      }
      fetchMenu();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRemoved(false);
    }
  }, [selectedAccount]);

  return (
    <section className="flex flex-col">
      <div className="w-full h-[77px] border-b pl-[16px] border-amber-500 flex items-center">
        <Button
          onClick={() => setRemoved(true)}
          variant={"ghost"}
          className="flex flex-row gap-[8px] cursor-pointer"
        >
          <img src={Archive} alt="archive" />
          <h1 className="text-white text-[18px] ">Arquivar</h1>
        </Button>
      </div>
      {accountData && !removed ? (
        accountData.subMenuItems.map((subItem, index) => (
          <div
            key={index}
            className="px-[16px] py-[16px] border-b border-[#FFFF] flex flex-row items-center gap-[16px]"
          >
            <div className="w-[50px] h-[50px] bg-gradient-button rounded-full flex items-center justify-center">
              <h4 className="text-white  uppercase text-[14px]">
                {subItem.owner}{" "}
              </h4>
            </div>
            <div className="flex flex-col gap-[2px] w-full">
              <h2 className="font-bold text-[16px] text-[white]">
                {subItem.name}
              </h2>
              <h3 className="font-semibold text-[14px]">{subItem.subject}</h3>
              <div className="flex flex-row w-full justify-between">
                <p className="text-[#64748B] text-[14px] font-normal">
                  Olá, gostaria de saber o status do meu pedido feito na semana
                  passada...
                </p>
                <div className="flex flex-row gap-[5px]">
                  {subItem.users.map((user, userIndex) => (
                    <div
                      key={userIndex}
                      className="w-[40px] h-[40px] bg-gradient-button rounded-full flex items-center justify-center"
                    >
                      <h4 className="text-white  uppercase text-[14px]">
                        {user}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-white pl-[16px] text-[18px] font-bold">
          Selecione uma conta para visualizar as mensagens
        </h1>
      )}
    </section>
  );
}
