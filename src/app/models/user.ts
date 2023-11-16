export enum IUserRole {
  USER,
  ADMIN
}
export interface IUser 
{
  id: string,
  username: string,
  password: string,
  role: string,
  avatar: IUserRole,
  favorites: number[]
}