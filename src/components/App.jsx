import React, { useState } from "react";

function App() {
  let [toDo, setToDo] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  function handleChange(event) {
    console.log(event.target.value);
    const newValue = event.target.value;
    setToDo(newValue);
  }

  function addItem(event) {
    setToDoItems(prevItems => {
      return [...prevItems, toDo];
    });
    // clear inpit
    setToDo("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={toDo} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoItems.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
