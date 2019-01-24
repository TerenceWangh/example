import React from 'react';
import Footer from './Footer';
import TodoList from './TodoList';
import { Todo } from '../model/Todo';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../model/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

interface MainSectionProps {
  todos: Todo[];
  clearCompleted: () => void;
  completeAll: () => void;
  editTodo: (todo: Todo, text: string) => void;
  completeTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
}

interface MainSectionState {
  filter: string;
};

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      this.props.clearCompleted();
    }
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  render() {
    const filter = this.state.filter;
    const { todos, completeTodo, deleteTodo, editTodo } = this.props;

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const actions = {completeTodo, deleteTodo, editTodo};

    const todosCount = todos.length;
    const completedCount = todos.reduce((count: number, todo): number =>
      todo.completed ? count + 1 : count,
      0
    );

    return (
      <section className="main">
        {
          !!todosCount &&
          <span>
            <input
              className="toggle-all"
              type="checkbox"
              checked={completedCount == todosCount}
              readOnly
            />
            <label onClick={() => {}} />
          </span>
        }
        <TodoList
          filteredTodos={filteredTodos}
          actions={actions} />
        {
          !!todosCount &&
          <Footer
            filter={filter}
            completedCount={completedCount}
            activeCount={todosCount - completedCount}
            onClearCompleted={this.handleClearCompleted.bind(this)}
            onShow={this.handleShow.bind(this)}
          />
        }
      </section>
    );
  }
}

export default MainSection;