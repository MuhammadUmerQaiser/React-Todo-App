import './App.css';
import { Header } from "./Components/Header";
import { Todos } from "./Components/Todos";
import { AddTodo } from "./Components/AddTodo";
import { Footer } from "./Components/Footer";
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log('Todo', todo);

    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addNewTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(sno);

    setTodos([...todos, newTodo]);
  }

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])


  return (
    <div>
      <Header title="My Todo App" />
      <AddTodo addNewTodo={addNewTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
