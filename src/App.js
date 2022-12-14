import "./App.css";
import styled from "styled-components";
import Todo from "./components/Todo";
import { useState } from "react";
import WorkflowTask from "./components/WorkflowTask";

//Styles
const LeftPaneStyled = styled.div`
  width: 50%;
  height: 100vh;
  background-color: rgb(250, 250, 250);
  padding: 8px;
`;

const CenterPaneStyled = styled.div`
  width: 50%;
  height: 100vh;
  padding: 8px;
`;

function App() {
  //State
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [workflowList, setWorkflowList] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);

  //Adding Todos
  function addTodo(e, id) {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }
    setTodoList((prev) => [
      ...prev,
      {
        input: input,
        id: id,
        canEdit: false,
      },
    ]);
    //Reset addTodo field
    setInput("");
  }

  //Deleting Todos
  function deleteTodo(todo) {
    const newList = todoList.filter((item) => item.id !== todo);
    setTodoList(newList);
  }

  function deleteFromWorkflow(todo) {
    const newList = workflowList.filter((item) => item.id !== todo);
    setWorkflowList(newList);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  //Editing Todos
  function toggleEdit(id) {
    const taskToUpdate = todoList.find((item) => item.id === id);
    setTemp(taskToUpdate);

    const newList = todoList.map((item) => {
      if (item.id !== id && item.canEdit === true) {
        item.input = temp.input;
        item.canEdit = false;
      }
      if (item.id === id) {
        item.canEdit = item.canEdit ? false : true;
        setOpenEdit(true);
      }
      return item;
    });
    setTodoList(newList);
  }

  function toggleWorkflowEdit(id) {
    const taskToUpdate = workflowList.find((item) => item.id === id);
    setTemp(taskToUpdate);

    const newList = workflowList.map((item) => {
      if (item.id !== id && item.canEdit === true) {
        item.input = temp.input;
        item.canEdit = false;
      }

      if (item.id === id) {
        item.canEdit = item.canEdit ? false : true;
        setOpenEdit(true);
      }
      return item;
    });
    setWorkflowList(newList);
  }

  function handleEditChange(e) {
    setTemp({ input: e.target.value });
  }

  function handleEditSubmit(e, id) {
    e.preventDefault();
    const newList = todoList.map((item) => {
      if (item.id === id) {
        item.input = temp.input;
      }
      return item;
    });

    setTodoList(newList);
    toggleEdit(id);
    setOpenEdit(false);
  }

  function handleEditWorkflowSubmit(e, id) {
    e.preventDefault();
    const newList = workflowList.map((item) => {
      if (item.id === id) {
        item.input = temp.input;
      }
      return item;
    });

    setWorkflowList(newList);
    toggleWorkflowEdit(id);
    setOpenEdit(false);
  }

  function revertChanges(id) {
    const newList = todoList.map((item) => {
      if (item.id === id) {
        temp.input = item.input;
      }
      return item;
    });
    setTodoList(newList);
    toggleEdit(id);
    setOpenEdit(false);
  }

  function revertWorkflowChanges(id) {
    const newList = workflowList.map((item) => {
      if (item.id === id) {
        temp.input = item.input;
      }
      return item;
    });
    setWorkflowList(newList);
    toggleWorkflowEdit(id);
    setOpenEdit(false);
  }

  //Move todo to workflow
  function addToWorkflow(id) {
    const taskToAdd = todoList.find((item) => item.id === id);
    setWorkflowList((prev) => [...prev, taskToAdd]);
    deleteTodo(id);
  }

  function removeFromWorkflow(id) {
    const taskToRemove = workflowList.find((item) => item.id === id);
    setTodoList((prev) => [...prev, taskToRemove]);
    deleteFromWorkflow(id);
  }

  return (
    <div className='App'>
      <LeftPaneStyled>
        <h1>Task List</h1>
        <Todo
          todoList={todoList}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          input={input}
          handleChange={handleChange}
          toggleEdit={toggleEdit}
          handleEditChange={handleEditChange}
          temp={temp}
          handleEditSubmit={handleEditSubmit}
          revertChanges={revertChanges}
          addToWorkflow={addToWorkflow}
          openEdit={openEdit}
        />
      </LeftPaneStyled>
      <CenterPaneStyled>
        <h1>Workflow</h1>
        <WorkflowTask
          workflowList={workflowList}
          todoList={todoList}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          input={input}
          handleChange={handleChange}
          toggleWorkflowEdit={toggleWorkflowEdit}
          handleEditChange={handleEditChange}
          temp={temp}
          handleEditWorkflowSubmit={handleEditWorkflowSubmit}
          revertChanges={revertChanges}
          addToWorkflow={addToWorkflow}
          removeFromWorkflow={removeFromWorkflow}
          deleteFromWorkflow={deleteFromWorkflow}
          openEdit={openEdit}
          revertWorkflowChanges={revertWorkflowChanges}
        />
      </CenterPaneStyled>
    </div>
  );
}

export default App;
