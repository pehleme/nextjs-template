import { TodoModel } from "@/models";
import { createService } from "./common";

const PATH = "/todo";

const TodoService = createService<TodoModel>(PATH);

export { TodoService };

