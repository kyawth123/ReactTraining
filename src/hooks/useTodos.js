import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../api/todos";
import useTodoStore from "../stores/todoStore";

const useTodos = () => {
  const queryClient = useQueryClient();
  const { setTodos, addTodo: addTodoStore, updateTodo: updateTodoStore, removeTodo, searchQuery, filter ,executeFilter } = useTodoStore();

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  useEffect(() => {
    if (query.data) {
      setTodos(query.data);
      executeFilter();
    }
  }, [query.data, executeFilter, setTodos, filter, searchQuery]);
  // useEffect works well without setTodos executeFilter in dependency array.
  // ai says that every variable used inside useEffect should be listed in the dependency array. 
  // This ensures the effect always has access to the latest values.

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
