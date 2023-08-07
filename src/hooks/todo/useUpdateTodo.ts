import { QUERY_KEYS } from "@/libs/react-query/keys";
import { TodoModel } from "@/models";
import { TodoService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((todo: TodoModel) => TodoService.update(todo, todo.id), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
    },
  });
};

export { useUpdateTodo };

