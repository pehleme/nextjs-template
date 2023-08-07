import { QUERY_KEYS } from "@/libs/react-query/keys";
import { TodoModel } from "@/models";
import { TodoService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((todo: TodoModel) => TodoService.create(todo), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
    },
  });
};

export { useCreateTodo };

