import styled from "styled-components";

export const Button = styled.button`
  height: 35px;
  background-color: transparent;
  display: inline-block;
  border: none;
  padding: 4px 6px;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  :hover,
  :focus {
    background: #0053ba;
  }

  /* :focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  } */

  :active {
    transform: scale(0.99);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  font-size: 16px;
  border-radius: none;
  padding: 4px 8px;
  margin-bottom: 8px;

  :focus {
    outline: none;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const TimeInput = styled.input`
  text-align: right;
  width: 40px;
  height: 40px;
  border: none;
  font-size: 16px;
  border-radius: none;
  padding: 4px 8px;

  :focus {
    outline: none;
    /* box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.2); */
    border: none;
  }
`;

export const TimeContainer = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-around;
  background-color: white;
  margin-bottom: 8px;
  color: grey;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const TodoText = styled.p`
  font-size: 16px;
  width: 80%;
  word-wrap: break-word;
  color: #474748;
  font-weight: 500;
`;

export const TodoContainer = styled.div`
  padding: 8px;
  border-bottom: 1px solid lightgray;
  background-color: ${(props) => (props.openEdit ? "#EDCB0C" : "transparent")};
`;

export const TodoListContainer = styled.div`
  border: 1px solid lightgray;
`;

export const TaskItems = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 1fr 1fr;
`;

export const UpdateOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddTaskContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 50%;
  padding: 8px;
  background: #8db95b;
`;
