import { useForm } from 'react-hook-form'
import useTodos from '../hooks/useTodos'

const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { todo: '', description: '' },
  })
  const { addTodo } = useTodos()

  const onSubmit = (data) => {
    addTodo.mutate(
      { ...data, isFinished: false },
      {
        onSuccess: () => reset(),
      }
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '1rem' }}>
      <input
        placeholder="Todo title..."
        {...register('todo', { required: 'Title is required' })}
      />
      <input
        placeholder="Description..."
        {...register('description')}
      />
      <button type="submit" disabled={addTodo.isPending}>
        {addTodo.isPending ? 'Adding...' : 'Add'}
      </button>
    </form>
  )
}

export default TodoForm
