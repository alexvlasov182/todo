import React from "react";
import TodoListItem from "./todo-list-itme";

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem />
      </li>
      <li>
        <TodoListItem />
      </li>
    </ul>
  );
};

export default TodoList;
