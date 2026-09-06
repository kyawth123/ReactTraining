import useTodos from '../hooks/useTodos'
import useUIStore from '../stores/uiStore'
import TodoForm from './TodoForm'
import TodoItem from '../components/TodoItem'

const TodoListPage = () => {
  const { data: todos = [], isLoading, isError, error } = useTodos()
  const searchQuery = useUIStore((state) => state.searchQuery);
  const setSearchQuery = useUIStore((state) => state.setSearchQuery);
  const filter = useUIStore((state) => state.filter);
  const setFilter = useUIStore((state) => state.setFilter);

  const filteredTodos = (todos ?? [])
    .filter((todo) => todo.todo.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((todo) => {
      if (filter === 'finished') return todo.isFinished
      if (filter === 'unfinished') return !todo.isFinished
      return true
    })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div style={{ padding: '1rem' }}>
      <TodoForm />
      <input
        placeholder="Search todos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="finished">Finished</option>
        <option value="unfinished">Unfinished</option>
      </select>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoListPage
