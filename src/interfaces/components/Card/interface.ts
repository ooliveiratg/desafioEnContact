import type { IAccount } from "@/interfaces/services/interface";

export interface ICard {
    accountData: IAccount | undefined
    removed: boolean;

}