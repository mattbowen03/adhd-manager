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
} from "../styles/todoStyle";

function WorkflowTask({
  toggleEdit,
  handleEditChange,
  temp,
  handleEditSubmit,
  revertChanges,
  workflowList,
  removeFromWorkflow,
  deleteFromWorkflow,
}) {
  return (
    <TodoListContainer>
      {workflowList.map((todo, idx) => {
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
                <Button onClick={() => deleteFromWorkflow(todo.id)}>
                  <img src={deleteIcon} alt='delete' />
                </Button>
                <Button onClick={() => toggleEdit(todo.id)}>
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
