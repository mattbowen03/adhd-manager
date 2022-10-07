import React from "react";

export default function Todo({
  todoList,
  addTodo,
  deleteTodo,
  input,
  handleChange,
  toggleEdit,
  handleEditChange,
  temp,
  handleEditSubmit,
  revertChanges,
}) {
  return (
    <div>
      {todoList.map((todo, idx) => {
        return (
          <div key={idx}>
            {todo.canEdit ? (
              <div>
                <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
                  <input
                    type='text'
                    value={temp.input || ""}
                    onChange={handleEditChange}></input>
                  <button type='submit' disabled={temp.input === ""}>
                    Update
                  </button>
                  <button
                    type='button'
                    onClick={() => {
                      revertChanges(todo.id);
                    }}>
                    Revert
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <span>{todo.input}</span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={() => toggleEdit(todo.id)}>Edit</button>
              </div>
            )}
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
