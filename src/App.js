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
      },
    ]);
    setInput("");
  }

  function deleteTodo(todo) {
    console.log(todo);
    const newList = todoList.filter((item) => item.id !== todo);

    setTodoList(newList);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function editTodo(todo) {
    console.log({ todo });
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
          editTodo={editTodo}
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
