import { createAction } from 'redux-actions';
import { Todo } from '../model/Todo';
import * as types from '../model/ActionTypes';

const addTodo = createAction<Todo, string>(
  types.ADD_TODO,
  (text: string) => ({ text, completed: false})
);

const deleteTodo = createAction<Todo, Todo>(
  types.DELETE_TODO,
  (todo: Todo) => todo
);

const editTodo = createAction<Todo, Todo, string>(
  types.EDIT_TODO,
  (todo: Todo, newText: string) => ({ ...todo, text: newText })
);

const completeTodo = createAction<Todo, Todo>(
  types.COMPLETE_TODO,
  (todo: Todo) => todo
);

const completeAll = createAction<void>(
  types.COMPLETE_ALL_TODOS,
  () => { }
);

const clearCompleted = createAction<void>(
  types.CLEAR_COMPLETED,
  () => { }
);

const setVisibilityFilter = createAction<void>(
  types.SET_VISIBILITY_FILTER,
  () => {}
)

export {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted,
  setVisibilityFilter
}