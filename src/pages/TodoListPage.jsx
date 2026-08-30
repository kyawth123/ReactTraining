import useTodos from '../hooks/useTodos'
import useTodoStore from '../stores/todoStore'
import TodoForm from './TodoForm'
import TodoItem from '../components/TodoItem'

const TodoListPage = () => {
  const { isLoading, isError, error } = useTodos()
  const { searchQuery, setSearchQuery, filter, setFilter, filteredTodos } = useTodoStore()

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
