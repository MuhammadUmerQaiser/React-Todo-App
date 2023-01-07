import './App.css';
import { Header } from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import React, {useState} from 'react';

function App() {
  const onDelete = (todo) => {
    console.log('Todo', todo);

    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Watch Drama",
      desc: "I have to watch drama at 9.00"
    },
    {
      sno: 2,
      title: "Study",
      desc: "I have to study at 11.00"
    },
    {
      sno: 3,
      title: "Sleep",
      desc: "I have to sleep at 1.00"
    },
  ]);
  return (
    <div>
      <Header title="My Todo App" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
