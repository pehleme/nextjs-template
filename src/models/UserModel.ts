import { BaseModel } from "./common/BaseModel";

export interface UserModel extends BaseModel {
  firstName: string;
  lastName: string;
  email: string;
}