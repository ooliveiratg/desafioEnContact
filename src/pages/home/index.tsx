import type { IAccount } from "@/interfaces/services/interface";
import { AccountsMessage } from "@/services/accountsMessage";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Archive from "@/assets/svg/archive.svg";

import { toast } from "sonner";
import { Button } from "@/ui/button";
import { Card } from "@/components/Card";

export default function Home() {
  const { selectedAccount } = useOutletContext<{
    selectedAccount: string | null;
  }>();
  const [accountData, setAccountData] = useState<IAccount | undefined>(
    undefined,
  );
  const [removed, setRemoved] = useState(false);
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
      setAccountData(undefined);
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
      <Card accountData={accountData} removed={removed} />
    </section>
  );
}
