import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import MainSection from './MainSection';
import { Todo } from '../model/Todo';
import { addTodo, editTodo, deleteTodo, completeTodo, clearCompleted, completeAll } from '../actions';

interface AppProps {
  todos: Todo[];
  dispatch: Dispatch<any>;
}

class App extends React.Component<AppProps> {
  render() {
    const {todos, dispatch} = this.props;

    return (
      <div>
        <Header addTodo={(text:string) => dispatch(addTodo(text))} />
        <MainSection
          todos={todos}
          editTodo={(t, s) => dispatch(editTodo(t, s))}
          deleteTodo={(t: Todo) => dispatch(deleteTodo(t))}
          completeTodo={(t: Todo) => dispatch(completeTodo(t))}
          clearCompleted={() => dispatch(clearCompleted())}
          completeAll={() => dispatch(completeAll())}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);