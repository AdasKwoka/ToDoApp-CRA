import React from 'react';

const Task = (props) => {
  const taskEnd = new Date(props.task.finishDate).toLocaleString();
  if(props.task.active){
    return ( 
      <li>
        <strong style={props.task.important ? {color:"red"} : null}>{props.task.text}</strong> 
        <span className="when">- do <em>{props.task.date}</em></span>
        <button className="btnT" onClick={() => props.move(props.task.id)}>✓</button>
        <button className="btnT" onClick={() => props.delete(props.task.id)}>X</button>
      </li>   
    );
  } else {
    return (
      <li>
        <strong>{props.task.text}</strong>
        <span className="deadline"> (termin: {props.task.date})</span>
        <button className="btnT doneT" onClick={() => props.delete(props.task.id)}>X</button>
        <span className="dT"> - wykonane w <strong>{taskEnd}</strong></span>
      </li>
    )
  }
}
 
export default Task;