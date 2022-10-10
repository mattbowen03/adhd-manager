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
} from "../styles/todoStyle";

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
                    autoFocus
                    maxLength='40'
                    value={temp.input || ""}
                    onChange={handleEditChange}></Input>
                  <TimeInput
                    maxLength={2}
                    placeholder='00'
                    name='hours'
                    onChange={handleEditChange}
                    value={temp.hours || ""}
                    required></TimeInput>
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
              <Container>
                <Container>
                  <TodoText>{todo.input}</TodoText>
                </Container>
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
            )}
          </TodoContainer>
        );
      })}
    </TodoListContainer>
  );
}

export default WorkflowTask;
