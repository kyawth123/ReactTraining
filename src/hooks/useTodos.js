import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../api/todos";
import useTodoStore from "../stores/todoStore";

const useTodos = () => {
  const queryClient = useQueryClient();
  const { setTodos, addTodo: addTodoStore, updateTodo: updateTodoStore, removeTodo } = useTodoStore();

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  useEffect(() => {
    if (query.data) {
      setTodos(query.data);
    }
  }, [query.data, setTodos]);

  const addTodo = useMutation({
    mutationFn: createTodo,
    onSuccess: (newTodo) => {
      addTodoStore(newTodo);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: ({ id, updates }) => updateTodo(id, updates),
    onSuccess: (updatedTodo, { id }) => {
      updateTodoStore(id, updatedTodo);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (_data, id) => {
      removeTodo(id);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    ...query,
    addTodo,
    updateTodo: updateTodoMutation,
    deleteTodo: deleteTodoMutation,
  };
};

export default useTodos;
