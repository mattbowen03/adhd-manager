import "./App.css";
import styled from "styled-components";
import Todo from "./components/Todo";
import { useState } from "react";

const LeftPaneStyled = styled.div`
  width: 20%;
  height: 100vh;
  background-color: pink;
`;

const CenterPaneStyled = styled.div`
  width: 60%;
  background-color: aliceblue;
  height: 100vh;
`;
const RightPaneStyled = styled.div`
  width: 20%;
  background-color: gray;
  height: 100vh;
`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");

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

  function handleChange(e) {
    setInput(e.target.value);
  }

  //Editing Todos
  function toggleEdit(id) {
    const taskToUpdate = todoList.find((item) => item.id === id);
    setTemp(taskToUpdate);

    const newList = todoList.map((item) => {
      if (item.id === id) {
        item.canEdit = item.canEdit ? false : true;
      }
      return item;
    });
    setTodoList(newList);
  }

  function handleEditChange(e) {
    setTemp({ input: e.target.value });
    console.log(e.target.value);
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
  }

  function revertChanges(id) {
    const newList = todoList.map((item) => {
      if (item.id === id) {
        temp.input = item.input;
      }
      return item;
    });
    setTodoList(newList);
  }

  return (
    <div className='App'>
      <LeftPaneStyled>
        <h1>Tasks</h1>
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
        />
      </LeftPaneStyled>
      <CenterPaneStyled>
        <h1>Workflow</h1>
      </CenterPaneStyled>
      <RightPaneStyled>
        <h1>Completed</h1>
      </RightPaneStyled>
    </div>
  );
}

export default App;
