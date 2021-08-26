import React from 'react';
import Task from './Task';


const DoneTasks = props => {
  props.done.sort((a,b) => {
    a = a.finishDate;
    b = b.finishDate;
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
  })
  const tasks = props.done.map(task => (
    <Task key={task.id} task={task} delete={props.delete} />
  ))

  

  return ( 
    <div className="tasks done">
      <h1>Zadania wykonane ({props.done.length})</h1>
      {tasks.length > 5 && <p className="message">Wyświetlone zostało tylko 5 ostatnio wykonanych zadań</p>}
      <ul>
        {tasks.length > 5 ? tasks.slice(0,5) : tasks}
      </ul>
    </div>
  );
}
 
export default DoneTasks;