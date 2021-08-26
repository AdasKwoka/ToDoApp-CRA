import React, { Component } from 'react';

import AddForm from '../components/AddForm';
import ActiveTasks from '../components/ActiveTasks'
import DoneTasks from '../components/DoneTasks'

import '../styles/App.css';

class App extends Component {
  counter = 0;
  state = { 
    tasks : []
  }

  handleDeleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({ tasks });
  }

  handleDoneTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.map(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
      return task;
    })

    this.setState({ tasks });
  }

  handleAddTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      finishDate: null,
      active: true,
    }
    this.counter++;
    this.setState(prevState => {
      return { tasks: [...prevState.tasks, task] };
    });
    return true;
  }

  render() {
    const activeTasks = this.state.tasks.filter(task => task.active);
    const doneTasks = this.state.tasks.filter(task => !task.active);
    return ( 
      <div className="app">
        <AddForm addTask={this.handleAddTask}/>
        <ActiveTasks active={activeTasks} move={this.handleDoneTask} delete={this.handleDeleteTask}/>
        <DoneTasks done={doneTasks} delete={this.handleDeleteTask} />
      </div>
    );
  }
}
 
export default App;
