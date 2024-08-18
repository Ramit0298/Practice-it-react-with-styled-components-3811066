import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <Todo key={i} title={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
