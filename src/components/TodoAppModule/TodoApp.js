import React, { useState } from "react";
import TodoForm from "./form";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [inputHandler, inputHandlerFunction] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-app container-fluid">
      <div className="todo-app-wrap">
        <TodoForm
          inputHandlerFunction={inputHandlerFunction}
          inputHandler={inputHandler}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          inputHandler={inputHandler}
        />
      </div>
    </div>
  );
};

export default TodoApp;
