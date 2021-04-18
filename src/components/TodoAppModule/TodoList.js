import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, setTodos, inputHandler }) => {
  console.log("todos::", todos);
  return (
    <div className="Todo-list my-5">
      <h2>
        Your Todo's <hr />
      </h2>
      <ul className="p-0">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            todos={todos}
            setTodos={setTodos}
            inputHandler={inputHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
