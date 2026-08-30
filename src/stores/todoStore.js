import { create } from 'zustand'

const useTodoStore = create((set, get) => ({
  todos: [],
  filteredTodos: [],
  searchQuery: '',
  filter: 'all',

  executeFilter: () => {
    const { todos, searchQuery, filter } = get()
    const filtered = todos
      .filter((todo) => todo.todo.toLowerCase().includes(searchQuery.toLowerCase()))
      .filter((todo) => {
        if (filter === 'finished') return todo.isFinished
        if (filter === 'unfinished') return !todo.isFinished
        return true
      })
    set({ filteredTodos: filtered })
  },

  setTodos: (todos) => set({ todos }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setFilter: (filter) => set({ filter }),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: (id, updates) => set((state) => ({
    todos: state.todos.map((t) => (t.id === id ? { ...t, ...updates } : t))
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter((t) => t.id !== id)
  })),
}))

export default useTodoStore
