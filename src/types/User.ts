export type User = {
  id: number | string,
  name: string,
  username: string,
};

export type UserState = {
  users: User[],
  loading: boolean,
  error: string | null,
};
