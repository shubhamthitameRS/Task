


import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  
  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      if (editIndex !== null) {

        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? taskInput : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
       
        setTasks([...tasks, taskInput]);
      }
      setTaskInput("");
    }
  };


  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  
  const handleEditTask = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div
      style={{
        padding: "15px",
        fontFamily: "Arial, sans-serif",
        width: "350px",
        height: "300px",
        margin: "20px auto",
        border: "2px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflowY: "auto",
        backgroundColor: "#fdfdfd",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "18px", color: "#333" }}>
        Task List
      </h1>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f9f9f9",
              padding: "8px",
              margin: "5px 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "14px",
            }}
          >
            <span>{task}</span>
            <div>
              <button
                onClick={() => handleEditTask(index)}
                style={{
                  marginRight: "5px",
                  padding: "5px 10px",
                  fontSize: "12px",
                  backgroundColor: "#FFC107",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <span role="img" aria-label="edit">
                  ✏️
                </span>
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                style={{
                  padding: "5px 10px",
                  fontSize: "12px",
                  backgroundColor: "#F44336",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <span role="img" aria-label="delete">
                  🗑️
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
          style={{
            padding: "8px",
            fontSize: "14px",
            marginRight: "5px",
            width: "60%",
            borderRadius: "5px",
            border: "1px solid #ddd",
            boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: "8px 15px",
            fontSize: "14px",
            backgroundColor: editIndex !== null ? "#FFC107" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {editIndex !== null ? "Save" : "Add Task"}
        </button>
      </div>
    </div>
  );
}

export default TaskList;