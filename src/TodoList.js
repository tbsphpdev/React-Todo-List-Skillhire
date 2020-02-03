import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
export const TodoList = props => {
  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={props.addItem}>
          <TextField
            id="standard-basic"
            label="Task Name"
            ref={props.inputElement}
            value={props.currentItem.text}
            onChange={props.handleInput}
          />
          <Button variant="contained" color="primary" type="submit">Add Task</Button>
        </form>
      </div>
    </div>
  )

}
export default TodoList