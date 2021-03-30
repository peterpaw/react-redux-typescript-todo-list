import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo } from './AddTodo'
import { TodosState } from './todosReducer'

import './App.css'
import { addTodo } from './actions'

function App() {
  // useSelector parses the state object and will get only the required field
  const todos = useSelector<TodosState, TodosState['todos']>(
    (state) => state.todos
  )
  // in redux, state is updated by dispatching actions
  const dispatch = useDispatch()

  const onAddTodo = (todo: string) => {
    // create an action object
    dispatch(addTodo(todo))
  }

  return (
    <div className="App">
      <h2>Redux Todo-List</h2>
      <AddTodo addTodo={onAddTodo} />
      <ul className="App-list">
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>
        })}
      </ul>
    </div>
  )
}

export default App
