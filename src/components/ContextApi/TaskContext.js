import React, { useState, createContext, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  // FETCH DATA
  useEffect(() => {
    fetchTasks();
  }, []);

  // FETCH ALL
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TaskContext.Provider>
  );
};
