import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "./Actions";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
            <button
              onClick={() =>
                handleEdit(todo.id, prompt("Enter new text:", todo.text))
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
