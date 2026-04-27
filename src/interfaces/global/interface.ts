export interface IGlobalOnAccountSelect {
  onAccountSelect: (accountId: string) => void;
  accountSelected: (name: string) => void;
}
