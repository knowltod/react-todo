import { useState } from "react";
import "./styles/styles.css";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
    return todos;
  }

  return (
    <>
      <header className='header'>To-Do App</header>
      <NewTodoForm addTodo={addTodo} />
      <h1 className='todo-header'>Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
      />
    </>
  );
}
