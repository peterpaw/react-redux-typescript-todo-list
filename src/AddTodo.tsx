import React, { ChangeEvent } from 'react'

interface AddTodoInputProps {
  addTodo(todo: string): void
}

export const AddTodo: React.FC<AddTodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState('')

  const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  const onAddTodo = () => {
    addTodo(todo)
    setTodo('')
  }

  return (
    <div>
      <input
        onChange={updateTodo}
        value={todo}
        type="text"
        name="todo"
        placeholder="Todo"
      />
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  )
}
