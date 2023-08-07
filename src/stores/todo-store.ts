import { TodoModel } from '@/models';
import { create } from 'zustand';
import { devtools } from "zustand/middleware";

type TodoStoreState = {
  todo?: TodoModel,
  todos?: TodoModel[],
}

type TodoStoreActions = {
  setTodo(todo?: TodoModel): void;
  setTodos(todos?: TodoModel[]): void;
}

type TodoStore = TodoStoreState & TodoStoreActions

const useTodoStore = create(devtools<TodoStore>((set) => ({
  todo: undefined,
  todos: undefined,
  setTodo: (todo) => set(() => ({ todo })),
  setTodos: (todos) => set(() => ({ todos })),
})))

export { useTodoStore };

