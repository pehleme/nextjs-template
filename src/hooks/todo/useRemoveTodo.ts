import { QUERY_KEYS } from "@/libs/react-query/keys";
import { Id } from "@/models/common";
import { TodoService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useRemoveTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((id: Id) => TodoService.remove(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
    },
  });
};

export { useRemoveTodo };

