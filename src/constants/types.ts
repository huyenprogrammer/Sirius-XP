export interface IUserInfor {
  username?: string;
  name?: string;
  password?: string;
  gender?: 1 | 2;
}

export interface IDailyTodos {
  id: number;
  todo: string;
  level: number;
}

export interface IDaily {
  id: number;
  completedDate: Date;
}
