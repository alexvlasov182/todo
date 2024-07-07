import React from "react";

// eslint-disable-next-line react/prop-types
const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "balck",
  };

  return <span style={style}>{label}</span>;
};

export default TodoListItem;
