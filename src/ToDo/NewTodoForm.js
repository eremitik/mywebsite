import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component {
  constructor (props){
    super(props);
    this.state={task: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.createTodo({...this.state, id: uuid(), completed: false})
    this.setState({task: ""})
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input 
          type="text"
          placeholder="New To-do" 
          id='task' 
          name='task'
          value={this.state.task} 
          onChange={this.handleChange}
        />
        <button className="NewTodoForm-button">Add To-do</button>
      </form>
    )
  }
}

export default NewTodoForm
