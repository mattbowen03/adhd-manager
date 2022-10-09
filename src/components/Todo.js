import React from "react";
import styled from "styled-components";
import editIcon from "../images/bxs-edit-alt.svg";
import deleteIcon from "../images/bx-x.svg";
import plusIcon from "../images/bx-plus.svg";
import {
  Button,
  Input,
  Container,
  TodoContainer,
  TodoListContainer,
  UpdateOptions,
  TodoText,
} from "../styles/todoStyle";

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
  addToWorkflow,
}) {
  return (
    <div>
      <TodoListContainer>
        {todoList.map((todo, idx) => {
          return (
            <TodoContainer key={idx} draggable={todo.canEdit ? false : true}>
              {todo.canEdit ? (
                <div>
                  <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
                    <Input
                      type='text'
                      maxLength='40'
                      value={temp.input || ""}
                      onChange={handleEditChange}></Input>
                    <UpdateOptions>
                      <Button
                        type='button'
                        onClick={() => {
                          revertChanges(todo.id);
                        }}>
                        Revert
                      </Button>
                      <Button type='submit' disabled={temp.input === ""}>
                        Update
                      </Button>
                    </UpdateOptions>
                  </form>
                </div>
              ) : (
                <Container>
                  <Container>
                    <TodoText>{todo.input}</TodoText>
                  </Container>
                  <Button onClick={() => deleteTodo(todo.id)}>
                    <img src={deleteIcon} alt='delete' />
                  </Button>
                  <Button onClick={() => toggleEdit(todo.id)}>
                    <img src={editIcon} alt='edit' />
                  </Button>
                  <Button onClick={() => addToWorkflow(todo.id)}>
                    <img src={plusIcon} alt='edit' />
                  </Button>
                </Container>
              )}
            </TodoContainer>
          );
        })}
      </TodoListContainer>
      <form
        onSubmit={(e) => {
          const id = Math.floor(Math.random() * 987132098);
          addTodo(e, id);
        }}>
        <Input
          type='text'
          maxLength='40'
          style={{ display: "block" }}
          value={input || ""}
          onChange={handleChange}
          placeholder='Add todo...'
        />
        <Button type='submit'>Add Todo</Button>
      </form>
    </div>
  );
}
