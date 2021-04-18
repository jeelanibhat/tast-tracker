import React from "react";

const TodoForm = ({ inputHandlerFunction, inputHandler, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    inputHandlerFunction(e.target.value);
  };

  const submitTodosHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputHandler, completed: false, id: Math.random() * 100 },
    ]);
    inputHandlerFunction(" ");
    console.log("insides :: ", todos);
  };

  return (
    <div className="todo-form">
      <form className="d-flex">
        <input
          onChange={inputTextHandler}
          type="text"
          placeholder="Enter Your Todo"
          className="form-control"
          value={inputHandler}
          required="required"
        />
        <button
          type="submit"
          onClick={submitTodosHandler}
          className="btn btn-warning px-4 text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
