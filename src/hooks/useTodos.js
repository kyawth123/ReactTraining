import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../api/todos";
import useTodoStore from "../stores/todoStore";

const useTodos = () => {
  const setTodos = useTodoStore((state) => state.setTodos);

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: Infinity
  });

  useEffect(() => {
    if (query.data) {
      setTodos(query.data);
    }
  }, [query.data, setTodos]);

  return query;
};

const useAddTodo = () => {
  const queryClient = useQueryClient();
  const addTodo = useTodoStore((state) => state.addTodo);

  return useMutation({
    mutationFn: createTodo,
    onSuccess: (newTodo) => {
      addTodo(newTodo);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const updateTodoStore = useTodoStore((state) => state.updateTodo);

  return useMutation({
    mutationFn: ({ id, updates }) => updateTodo(id, updates),
    onSuccess: (updatedTodo, { id }) => {
      updateTodoStore(id, updatedTodo);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: (_data, id) => {
      removeTodo(id);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export default useTodos;
export { useAddTodo, useUpdateTodo, useDeleteTodo };
