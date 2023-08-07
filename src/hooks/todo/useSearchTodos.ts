import { QUERY_KEYS } from "@/libs/react-query/keys";
import { TodoService } from "@/services";
import { useTodoStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";

const useSearchTodos = () => {
  const setTodos = useTodoStore((state) => state.setTodos);

  return useQuery([QUERY_KEYS.TODOS], () => TodoService.searchAll(), {
    onSuccess: setTodos,
  });
};

export { useSearchTodos };

