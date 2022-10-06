import React from "react";

export default function Todo({
  todoList,
  addTodo,
  deleteTodo,
  input,
  handleChange,
}) {
  return (
    <div>
      {todoList.map((todo, idx) => {
        return (
          <div key={idx}>
            <span>{todo.input}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        );
      })}
      <form
        onSubmit={(e) => {
          const id = Math.floor(Math.random() * 987132098);
          addTodo(e, id);
        }}>
        <input
          type='text'
          style={{ display: "block" }}
          value={input || ""}
          onChange={handleChange}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
}
