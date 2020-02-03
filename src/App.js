import React, { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

export const App = props => {
  const inputElement = React.createRef()
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });

  const deleteItem = key => {
    const filteredItems = items.filter(item => {
      return item.key !== key
    })
    setItems(filteredItems);
  }

  const markAsCompleted = item => {
    // Finding the task by id...
    const foundTask = items.find(
      task => task.key === item.key
    );

    // Updating the completed status...
    if (item.completed == true) {
      foundTask.completed = false;
    } else {
      foundTask.completed = true;
    }

    // Updating the state with the new updated task...
    setItems([...items, ...foundTask]);
  }

  const addItem = e => {
    e.preventDefault()
    const newItem = currentItem
    if (newItem.text !== '') {
      setItems([...items, newItem]);
      setCurrentItem({ text: '', key: '' });
    }
  }

  const handleInput = e => {
    const itemText = e.target.value
    setCurrentItem({ text: itemText, key: Date.now() })
  }

  return (
    <div className="App">
      <TodoList
        addItem={addItem}
        inputElement={inputElement}
        handleInput={handleInput}
        currentItem={currentItem}
      />
      <TodoItems entries={items} deleteItem={deleteItem} markAsCompletedItem={markAsCompleted} />
    </div>
  )
};
export default App;
