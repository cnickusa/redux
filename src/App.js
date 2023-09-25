import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import Drawer from "./components/Drawer/Drawer"

function App() {
  return (
    <>
      <Navbar />
      <Drawer />
      <Routes>
        <Route path="/" element={<TodoList />}/>
        <Route path="/add" element={<AddTodo />}/>
      </Routes>
    </>
  );
}

export default App;
