import useTodos from '../hooks/useTodos'
import useUIStore from '../stores/uiStore'
import useTodoStore from '../stores/todoStore'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'

const TodoListPage = () => {
  const { isLoading, isError, error } = useTodos()
  const { searchQuery, filter, setSearchQuery, setFilter } = useUIStore()
  const todos = useTodoStore((state) => state.todos)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  const filtered = todos
    .filter((todo) => todo.todo.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((todo) => {
      if (filter === 'finished') return todo.isFinished
      if (filter === 'unfinished') return !todo.isFinished
      return true
    })

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
      {filtered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoListPage
