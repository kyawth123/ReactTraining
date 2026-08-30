import { useState } from 'react'
import useTodos from '../hooks/useTodos'

const TodoForm = () => {
  const [todo, setTodo] = useState('')
  const [description, setDescription] = useState('')
  const { addTodo } = useTodos()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todo.trim()) return
    addTodo.mutate(
      { todo, description, isFinished: false },
      {
        onSuccess: () => {
          setTodo('')
          setDescription('')
        },
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        placeholder="Todo title..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" disabled={addTodo.isPending}>
        {addTodo.isPending ? 'Adding...' : 'Add'}
      </button>
    </form>
  )
}

export default TodoForm
