import { ROLE } from "../constants/roles";

export interface IUser {
  firstName:string;
  lastName:string;
  age:number;
  email:string;
  username:string;
  password:string;
  role:ROLE;
}