import React from "react";
import { createRoot } from "react-dom/client";

const TodoList = () => {
  return (
    <ul>
      <li>React App</li>
      <li>Build Awesome Appliaction</li>
    </ul>
  )
};

const AppHeader = () => {
  return <h1>My Todo List</h1>
  
};

const SearchPanel = () => {
  return <input  placeholder="search"/>
};

const App = () => {
  return  (
    <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
  )
};

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />);