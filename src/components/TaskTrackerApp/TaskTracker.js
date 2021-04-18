import Tasks from "./Tasks";
import { useState, useEffect } from "react";
import AddTask from "./AddTask";

const TaskTracker = () => {
  const btnClick = () => {
    console.log("btn click!");
  };

  // use state
  const [tasks, setTasks] = useState([]);
  const [toggleAddBtn, setToggleAddBtn] = useState(false);

  // DELETE TASK
  const DeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id != id));
  };

  // ADD TASK
  const saveTask = async (task) => {
    // ------------ Static method ----------------
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);

    // ------------ Dynamic Method  --------------

    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

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
  // FETCH SINGLE FOR UPDATE
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //  TOGGLE REMINDER
  const toggleReminder = async (id) => {
    const toggleTask = await fetchTask(id);
    const updTask = { ...toggleTask, reminder: !toggleTask.reminder };
    console.log("updtask: ", updTask);

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container my-5 task-tracker-wrap">
      <h2 className="text-center">Task Tracker</h2>
      <div className="row">
        <div className="border m-auto w-30">
          <div className="d-flex justify-content-end pt-0 p-3">
            <button
              className="btn pull-right text-white bg-success"
              onClick={() => setToggleAddBtn(!toggleAddBtn)}
            >
              {toggleAddBtn ? "Close" : "Add"}
            </button>
          </div>
          {toggleAddBtn && <AddTask saveTask={saveTask} />}
          <div>
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={DeleteTask}
                onToggle={toggleReminder}
              />
            ) : (
              <p className="pl-2">No tasks available!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTracker;
