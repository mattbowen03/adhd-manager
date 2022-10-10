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
  AddTaskContainer,
  TimeInput,
  TimeContainer,
} from "../styles/todoStyle";
import TaskTime from "./TaskTime";
import displayTime from "../utils/displayTime";

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
  openEdit,
}) {
  return (
    <div>
      <TodoListContainer>
        {todoList.map((todo, idx) => {
          return (
            <TodoContainer
              openEdit={todo.id === temp.id && openEdit ? true : false}
              key={idx}
              draggable={todo.canEdit ? false : true}>
              {todo.canEdit ? (
                <div>
                  <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
                    <Input
                      type='text'
                      autoFocus
                      maxLength='40'
                      value={temp.input || ""}
                      onChange={handleEditChange}
                      name='input'></Input>
                    <TimeContainer>
                      <TimeInput
                        type='number'
                        maxLength={2}
                        placeholder='00'
                        name='hours'
                        onChange={handleEditChange}
                        value={temp.hours || ""}></TimeInput>
                      <p>hrs.</p>
                      <TimeInput
                        type='number'
                        maxLength={2}
                        placeholder='00'
                        name='minutes'
                        onChange={handleEditChange}
                        value={temp.minutes || ""}></TimeInput>
                      <p>mns.</p>
                    </TimeContainer>
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
                    <p>{displayTime(todo.hours, todo.minutes)}</p>
                  </Container>
                  <Button onClick={() => deleteTodo(todo.id)}>
                    <img src={deleteIcon} alt='delete' />
                  </Button>
                  <Button
                    onClick={() => {
                      if (!openEdit) {
                        toggleEdit(todo.id);
                      }
                    }}>
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
      <AddTaskContainer>
        <form
          onSubmit={(e) => {
            const id = Math.floor(Math.random() * 987132098);
            addTodo(e, id);
          }}>
          <Input
            autoFocus
            type='text'
            maxLength='40'
            style={{ display: "block" }}
            value={input.task || ""}
            onChange={handleChange}
            placeholder='Add Task...'
            required
            name='task'
          />
          <TimeContainer>
            <TaskTime input={input} handleChange={handleChange} />
            <p>hrs.</p>
            <TimeInput
              type='number'
              maxLength={2}
              placeholder='00'
              name='minutes'
              onChange={handleChange}
              value={input.minutes || ""}></TimeInput>
            <p>mns.</p>
          </TimeContainer>
          <Button type='submit' style={{ display: "block" }}>
            Add Task
          </Button>
        </form>
      </AddTaskContainer>
    </div>
  );
}
