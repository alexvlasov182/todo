import React from "react";
import { createRoot } from "react-dom/client";

const TodoList = () => {
  const items = ["Learn React", "Build Awesome App"];

  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = { fontSize: "20px" };
  return <input style={searchStyle} placeholder={searchText} />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
