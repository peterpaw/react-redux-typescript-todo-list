import { Action } from './actions'

export interface TodosState {
  todos: string[]
}

const initialState = {
  todos: []
}

export const todosReducer = (
  state: TodosState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return { ...state, todos: [...state.todos, action.payload] }
    }
    default:
      return state
  }
}
