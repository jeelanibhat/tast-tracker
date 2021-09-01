import Tasks from "./Tasks";
import { useState, useEffect, useContext } from "react";
import AddTask from "./AddTask";
import { TaskContext } from "../ContextApi/TaskContext";

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

  const [tasks1, setTasks1] = useContext(TaskContext);

  return (
    <div className="container my-5 task-tracker-wrap">
      <h2 className="text-center">Task Tracker</h2>
      <div className="row mb-5">
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

      <hr></hr>
      {/* <div className="row">Value :: {value}</div> */}
      <div className="my-5">
        <h3 className="text-left">
          Data sharing between components : using Context Api
        </h3>
        <p>This data is reflecting in About and Contact page </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Author</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody>
            {tasks1.map((task, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{task.text}</td>
                <td>{task.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTracker;
