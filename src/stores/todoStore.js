import { create } from 'zustand'

const useTodoStore = create((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: (id, updates) => set((state) => ({
    todos: state.todos.map((t) => (t.id === id ? { ...t, ...updates } : t))
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter((t) => t.id !== id)
  })),
}))

export default useTodoStore
