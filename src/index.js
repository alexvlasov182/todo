import React from "react";
import { createRoot } from "react-dom/client";

const el = (
  <div>
    <h1>My Todo List</h1>
    <input  placeholder="search"/>
    <ul>
      <li>React App</li>
      <li>Build Awesome Appliaction</li>
    </ul>
  </div>
  )
console.log(el);
const container = document.getElementById('root')
const root = createRoot(container);

root.render(el);