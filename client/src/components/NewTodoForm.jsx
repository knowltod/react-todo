/* eslint-disable react/prop-types */
import { useState } from "react";

export function NewTodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo === "") return;

    addTodo(newTodo);

    setNewTodo("");
  }

  return (
    <form className='create-todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder='New Todo'
        className='todo-input'
      />
      <button type='submit' className='add-button'>
        Add Todo
      </button>
    </form>
  );
}
