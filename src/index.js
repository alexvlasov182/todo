import React from "react";
import { createRoot } from "react-dom/client";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false },
    { label: "Build Awesome App", important: true },
    { label: "Have a lunch", important: false },
    { label: "Backend on Golang or Python", important: true },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
