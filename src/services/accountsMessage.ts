import type {
  IAccount,
  IAccountsMessage,
} from "@/interfaces/services/interface";

export async function AccountsMessage({ id }: IAccountsMessage) {
  try {
    const api = import.meta.env.VITE_API_URL_CONTACTS;
    if (!api) {
      return {
        success: false,
        message:
          "Problema com a url da api, verifique as variáveis de ambiente",
      };
    }
    const response = await fetch(`${api}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return {
        success: false,
        message: "Erro na resposta da API",
      };
    }
    console.log("Resposta da API:", response);
    const json: IAccount = await response.json();
    return {
      success: true,
      data: json,
    };
  } catch (error) {
    console.error("Erro ao buscar os menus:", error);
    return {
      success: false,
      message: "Erro ao buscar os menus",
    };
  }
}
