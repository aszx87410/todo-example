import React from 'react';

class Todo extends React.Component {
  handleDelete = () => {
    const {todo, onDelete} = this.props
    onDelete(todo.id)
  }

  handleMark = () => {
    const {todo, onMark} = this.props
    onMark(todo.id)
  }

  render() {
    const {todo} = this.props
    return (
      <li className="todo-item list-group-item d-flex justify-content-between align-items-center">
        <span className='todo-item__content'>{todo.content}</span>
        <div>
          <span className="badge badge-success badge-pill p-2 mr-4">
            {todo.isDone ? '已完成' : ''}
          </span>
          <div className="btn-group">
            <button type="button" className="todo-item__mark btn btn-outline-secondary" onClick={this.handleMark}>
              {!todo.isDone ? '已完成' : '未完成'}
            </button>
            <button type="button" className="todo-item__delete btn btn-outline-danger" onClick={this.handleDelete}>
              刪除
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Todo;
