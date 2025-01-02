import React, { useState } from "react";

function AddTodo({ onNewItem }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && dueDate) {
      onNewItem(name, dueDate);
      setName("");
      setDueDate("");
    } else {
      alert("Please fill in both the task name and due date.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
