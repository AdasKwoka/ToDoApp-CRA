import React from 'react';
import Task from './Task';

import '../styles/Tasks.css'

const ActiveTasks = props => {
  props.active.sort((a,b) => {
    a = a.text.toLowerCase();
    b = b.text.toLowerCase();
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
  })
  const tasks = props.active.map(task => (
    <Task key={task.id} task={task} delete={props.delete} move={props.move}/>
  ))
  return ( 
    <div className="tasks active">
      <h1>Zadania do wykonania</h1>
      <ul>
        {tasks}
      </ul>
    </div>
  );
}
 
export default ActiveTasks;