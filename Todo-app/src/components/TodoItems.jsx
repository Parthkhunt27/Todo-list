import React from "react";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="todo-items">
      {todoItems.length === 0 ? (
        <p>No tasks available!</p>
      ) : (
        todoItems.map((item, index) => (
          <div key={index} className="todo-item">
            <div className="details">
              <h3>{item.name}</h3>
              <p className="due-date">Due Date: {item.dueDate}</p>
            </div>
            <button
              className="delete-btn"
              onClick={() => onDeleteClick(item.name)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoItems;
