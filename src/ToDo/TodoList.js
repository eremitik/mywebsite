import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import NewTodoForm from './NewTodoForm.js'
import Todo from './Todo.js'
import './TodoList.css'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {todos: []}
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    })
  }

  update(id, updatedTask){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, task: updatedTask}
      }
      return todo;
    });
    this.setState({todos: updatedTodos})
  }

  toggleCompletion(id){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo;
    });
    this.setState({todos: updatedTodos})
  }

  render() {

    const todos = this.state.todos.map(todo => {
      return <Todo 
        key={todo.id} 
        id={todo.id} 
        task={todo.task} 
        completed={todo.completed}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}
        />
    })

    return (
      <div className="TodoList">
        <h1 style={{textAlign: 'center'}}>🗒️To-do List<span>A Simple React To-do List</span></h1>      
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create}/>

        <p className="TodoList-link">
            <Link to='/projects'>back</Link>
        </p>

      </div>
    )
  }
}

export default TodoList;
