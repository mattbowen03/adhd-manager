import React from "react";
import editIcon from "../images/bxs-edit-alt.svg";
import deleteIcon from "../images/bx-x.svg";
import minusIcon from "../images/bx-minus.svg";
import {
  Button,
  Input,
  Container,
  TodoContainer,
  TodoListContainer,
  UpdateOptions,
  TodoText,
  TimeInput,
  TaskItems,
} from "../styles/todoStyle";
import displayTime from "../utils/displayTime";

function WorkflowTask({
  todoList,
  toggleWorkflowEdit,
  handleEditChange,
  temp,
  handleEditWorkflowSubmit,
  workflowList,
  removeFromWorkflow,
  deleteFromWorkflow,
  openEdit,
  revertWorkflowChanges,
}) {
  return (
    <TodoListContainer>
      {workflowList.map((todo, idx) => {
        return (
          <TodoContainer
            openEdit={todo.id === temp.id && openEdit ? true : false}
            key={idx}
            draggable={todo.canEdit ? false : true}>
            {todo.canEdit ? (
              <div>
                <form onSubmit={(e) => handleEditWorkflowSubmit(e, todo.id)}>
                  <Input
                    type='text'
                    name='input'
                    autoFocus
                    maxLength='40'
                    value={temp.input || ""}
                    onChange={handleEditChange}></Input>
                  <TimeInput
                    type='number'
                    maxLength={2}
                    placeholder='00'
                    name='hours'
                    onChange={handleEditChange}
                    value={temp.hours || ""}></TimeInput>
                  <UpdateOptions>
                    <Button
                      type='button'
                      onClick={() => {
                        revertWorkflowChanges(todo.id);
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
              <TaskItems>
                <TodoText>{todo.input}</TodoText>
                <p>{displayTime(todo.hours, todo.minutes)}</p>

                <Container style={{ justifyContent: "flex-end" }}>
                  <Button onClick={() => deleteFromWorkflow(todo.id)}>
                    <img src={deleteIcon} alt='delete' />
                  </Button>
                  <Button
                    onClick={() => {
                      if (!openEdit) {
                        toggleWorkflowEdit(todo.id);
                      }
                    }}>
                    <img src={editIcon} alt='edit' />
                  </Button>
                  <Button onClick={() => removeFromWorkflow(todo.id)}>
                    <img src={minusIcon} alt='edit' />
                  </Button>
                </Container>
              </TaskItems>
            )}
          </TodoContainer>
        );
      })}
    </TodoListContainer>
  );
}

export default WorkflowTask;
