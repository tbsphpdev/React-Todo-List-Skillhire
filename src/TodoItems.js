import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
export const TodoItems = props => {
  const createTasks = item => {
    return (
      <ListItem key={item.key} className={`${item.completed ? 'completed' : 'pending'} theListofList`} >
        <span
          className={item.completed ? 'hide' : 'done'}
          onClick={() => props.markAsCompletedItem(item)}>
          <i className={`${item.completed ? 'fa fa-check-circle' : 'fa fa-circle-thin'}`}></i>
        </span>
        <span className="markAsCompletedText"> {item.text} </span>
        <IconButton aria-label="delete" className="pullRight" onClick={() => props.deleteItem(item.key)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ListItem>
    )
  }

  const todoEntries = props.entries
  const listItems = todoEntries.map(createTasks)

  return (
    <List className="theList">
      {listItems}
    </List>
  )
}
export default TodoItems
