import { BaseModel } from "./common/BaseModel";
import { TodoStatus } from "./enums/TodoStatus";

export interface TodoModel extends BaseModel {
  title: string;
  description: string;
  completed: boolean;
  status: TodoStatus;
}