import React from 'react';

const Task = ({ task, toggleCompleted, completed }) => {
  return(
    <li className={ completed ? 'completed' : '' } onClick={ toggleCompleted }>{ task }</li>
  );
};

export default Task;
