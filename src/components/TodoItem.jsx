import useTodos from '../hooks/useTodos'
import useUIStore from '../stores/uiStore'

const TodoItem = ({ todo }) => {
  const { updateTodo, deleteTodo } = useTodos()
  const { selectedTodoId, setSelectedTodoId } = useUIStore()

  const isSelected = selectedTodoId === todo.id

  return (
    <div
      style={{
        cursor: 'pointer',
        background: isSelected ? '#e0e0e0' : 'transparent',
        padding: '0.5rem',
        borderBottom: '1px solid #eee',
      }}
      onClick={() => setSelectedTodoId(todo.id)}
    >
      <span style={{ textDecoration: todo.isFinished ? 'line-through' : 'none' }}>
        {todo.todo}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation()
          updateTodo.mutate({ id: todo.id, updates: { ...todo, isFinished: !todo.isFinished } })
        }}
      >
        {todo.isFinished ? 'Undo' : 'Finish'}
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation()
          deleteTodo.mutate(todo.id)
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
