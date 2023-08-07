import { QUERY_KEYS } from "@/libs/react-query/keys";
import { Id } from "@/models/common";
import { TodoService } from "@/services";
import { useTodoStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";

const useSearchTodo = (id?: Id) => {
  const setTodo = useTodoStore((state) => state.setTodo);

  return useQuery([QUERY_KEYS.TODO, id], () => TodoService.search(id), {
    enabled: id !== "new",
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: setTodo,
  });
};

export { useSearchTodo };

