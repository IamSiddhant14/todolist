import { filter } from 'domutils';
import React, { Component } from 'react'

export default class Todo extends Component {

  constructor() {

    super();

    this.state = {
      tasks: [{ task: 'cheackmails', id: 1 }, { task: "Read article", id: 2 }],
      currtask: ''

    }
  }

  handleChange = (e)=>{
      this.setState({
        currtask:e.target.value 
      })
  }

  handleSubmit =()=>{
      this.setState ({
        tasks : [ ...this.state.tasks , {task:this.state.currtask , id : this.state.tasks.length}],
        currTask :''
      })
  }

  handleDelete =(id)=>{
       let narr = this.state.tasks.filter((taskObj)=>{
             return taskObj.id != id;
       })

       this.setState({
        tasks:[...narr]
       })
  }

  render() {

    return (

      <div>
        <input type="text" value={this.state.currtask} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
        {
          this.state.tasks.map((taskObj) => (

            <li key={taskObj.id}>
              <p>{taskObj.task}</p>
              <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
            </li>
          ))

        } 
        </ul>

      </div>

    )
  }
}
