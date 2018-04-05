import React from 'react';

const TaskForm = ({ handleChange, newTodo, handleSubmit }) => {
  return(
    <form onSubmit={handleSubmit}>
      <input
        placeholder="I need to..."
        onChange={ handleChange }
        value={ newTodo }
      />
      <button disabled={!newTodo} className="add">Add todo</button>
    </form>
  );
};

export default TaskForm;
