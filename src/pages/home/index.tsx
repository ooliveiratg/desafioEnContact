import type { IAccount } from "@/interfaces/services/interface";
import { AccountsMessage } from "@/services/accountsMessage";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Archive from "@/assets/svg/archive.svg";

import { toast } from "sonner";
import { Button } from "@/ui/button";
import { Card } from "@/components/Card";
import { useTheme } from "next-themes";

export default function Home() {
  const { selectedAccount } = useOutletContext<{
    selectedAccount: string | null;
  }>();
  const { theme } = useTheme();
  const [accountData, setAccountData] = useState<IAccount | undefined>(
    undefined,
  );
  const [removed, setRemoved] = useState(false);
  useEffect(() => {
    if (selectedAccount !== null) {
      async function fetchMenu() {
        const response = await AccountsMessage({ id: Number(selectedAccount) });
        if (!response.success) {
          toast.error(response.message || "Erro ao buscar as mensagens da conta");
          return;
        }
        setAccountData(response.data);
      }
      fetchMenu();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAccountData(undefined);
      setRemoved(false);
    }
  }, [selectedAccount]);

  return (
    <section className="flex flex-col h-full pb-[20px]">
      <div
        className={`w-full h-[77px] border-b pl-[16px] ${theme === "light" ? "border-black/60" : "border-white"} flex items-center`}
      >
        <Button
          onClick={() => setRemoved(true)}
          variant={"ghost"}
          className={`flex flex-row gap-[8px] ${theme === "light" ? "hover:bg-black/30" : ""}`}
        >
          <img src={Archive} alt="archive" />
          <h1 className=" text-[18px]">Arquivar</h1>
        </Button>
      </div>
      <div className="flex flex-col w-full h-full oveflow-y-auto">
        {accountData && accountData.subMenuItems.length === 0 ? (
          <p className="pl-[16px] text-[18px] font-bold">
            Nenhum item encontrado.
          </p>
        ) : (
          <Card accountData={accountData} removed={removed} />
        )}
      </div>
    </section>
  );
}
