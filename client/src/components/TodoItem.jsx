/* eslint-disable react/prop-types */
export function TodoItem({ completed, id, title, handleDelete, toggleTodo }) {
  return (
    <li>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => handleDelete(id)} className='delete-button'>
        DELETE
      </button>
    </li>
  );
}
