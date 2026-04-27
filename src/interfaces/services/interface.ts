export interface IMenusAccount {
  id: number;
  name: string;
  subMenus: [
    {
      id: number;
      name: string;
    },
  ];
}

export interface IAccount {
  id: number;
  subMenuItems: [
    {
      id: string
      name: string;
      subject: string;
      owner: string;
      users: [string];
    },
  ];
}

export interface IAccountsMessage {
  id: number;
}
