import { create } from 'zustand'

const useUIStore = create((set) => ({
  searchQuery: '',
  filter: 'all',
  selectedTodoId: null,
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setFilter: (filter) => set({ filter }),
  setSelectedTodoId: (selectedTodoId) => set({ selectedTodoId }),
}))

export default useUIStore
