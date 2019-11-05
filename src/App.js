import React from 'react';
import Todo from './Todo'
import './App.css';

// test
function Filter({ onClick, name, text, active }) {
  return (
    <li className="nav-item">
      <a className={"nav-link " + (active ? "active" : "")} href="#"
        onClick={() => onClick(name)}
      >
          {text}
      </a>
    </li>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      text: '',
      filter: 'all'
    }
    this.id = 0
  }
  

  addTodo = () => {
    const {todos, text} = this.state
    this.setState({
      todos: [...todos, {
        id: this.id++,
        content: text,
        isDone: false
      }],
      text: ''
    })
  }

  handleDelete = id => {
    const {todos} = this.state
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  handleMark = id => {
    const {todos} = this.state
    this.setState({
      todos: todos.map(todo => todo.id !== id ? todo : {
        ...todo,
        isDone: !todo.isDone
      })
    })
  }

  updateFilter = (name) => {
    this.setState({
      filter: name
    })
  }

  handleInput = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const {todos, text, filter} = this.state
    return (
      <div className="App">
        <div className="container">
          <div className='card mx-auto mt-5 w-50'>
            <div className='card-body'>
                <h2>Simple Todo List</h2>
                <div className="input-group mb-3">
                  <input type="text" className="todo-input form-control" placeholder="你想要新增的事項"
                    value={text} onChange={this.handleInput}
                  />
                  <div className="input-group-append">
                    <button className="add-todo btn btn-primary" type="button" onClick={this.addTodo}>新增</button>
                  </div>
                </div>
                <ul className="nav nav-pills mb-1">
                  <Filter onClick={this.updateFilter} name='all' text='全部' active={filter === 'all'} />
                  <Filter onClick={this.updateFilter} name='undone' text='未完成' active={filter === 'undone'} />
                  <Filter onClick={this.updateFilter} name='done' text='已完成' active={filter === 'done'} />
                </ul>
                <ul className="list-group">
                  {todos.filter(todo => {
                    if (filter === 'all') return true
                    return filter === 'done' ? todo.isDone : !todo.isDone
                  }).map(todo => (
                    <Todo key={todo.id} todo={todo} onDelete={this.handleDelete} onMark={this.handleMark} />
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
