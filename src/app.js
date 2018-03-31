import React    from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-css-only';
import './scss/style.scss';

import Task     from './components/Task';
import TaskForm from './components/TaskForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  toggleCompleted(index) {
    const todos = this.state.todos.map((todo, i) => {
      if (i === index) todo.completed = !todo.completed;
      return todo;
    });

    this.setState({ todos });
  }

  handleChange(e) {
    this.setState({ newTodo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = { task: this.state.newTodo, completed: false  };
    // concat merges two array and returns a new array
    const todos = this.state.todos.concat(task);
    this.setState({ todos, newTodo: '' });
  }

  filterTodos() {
    return this.state.todos.filter(todo => !todo.completed);
  }

  handleReset() {
    this.setState({
      todos: []
    });
  }

  render() {
    return(
      <main className="container">
        <h1>React Todo App</h1>
        <h2>You have <span>{ this.filterTodos().length }</span> todos to do</h2>
        <hr />
        <h3>Todo list</h3>
        <i><small>Click a Todo List Item to Check it off</small></i>
        <TaskForm
          handleChange={ this.handleChange }
          newTodo={ this.state.newTodo }
          handleSubmit={this.handleSubmit}
        />
        <button className="reset" onClick={ this.handleReset }>Reset</button>
        <ol>
          { this.state.todos.map((todo, i) =>
            <Task
              key={i}
              toggleCompleted={ () => this.toggleCompleted(i) }
              { ...todo }
            />
          )}
        </ol>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
