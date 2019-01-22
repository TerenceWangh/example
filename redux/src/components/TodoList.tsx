import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../model/Todo';

interface TodoListProps {
  filteredTodos: Todo[];
  actions: any;
}

class TodoList extends React.Component<TodoListProps> {
  render() {
    return (
      <ul className="todo-list">
        {this.props.filteredTodos.map(todo =>
          <TodoItem key={todo.id} todo={todo} {...this.props.actions} />)}
      </ul>
    );
  }
}

export default TodoList;