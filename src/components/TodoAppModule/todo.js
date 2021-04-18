import React from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Todo = ({ inputHandler, text, todos, setTodos, id }) => {
  const deleteHandler = () => {
    confirmAlert({
      title: "Are you sure?",
      message: "To Delete This Todo.",
      buttons: [
        {
          label: "Yes",
          onClick: () => setTodos(todos.filter((element) => element.id !== id)),
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="todo-item d-flex align-items-center">
      <span className="w-100 border px-2">{text}</span>
      <button className="btn-xs btn-danger" onClick={deleteHandler}>
        Del
      </button>
    </div>
  );
};
export default Todo;
