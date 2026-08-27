import apiClient from "./axios";

export const fetchTodos = async () => {
  const { data } = await apiClient.get("/todo");
  return data;
};

export const createTodo = async (todo) => {
  const { data } = await apiClient.post("/todo", todo);
  return data;
};

export const updateTodo = async (id, updates) => {
  const { data } = await apiClient.put(`/todo/${id}`, updates);
  return data;
};

export const deleteTodo = async (id) => {
  const { data } = await apiClient.delete(`/todo/${id}`);
  return data;
};
