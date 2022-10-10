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

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const TodoText = styled.p`
  font-size: 16px;
  width: 80%;
  word-wrap: break-word;
  color: #474748;
`;

export const TodoContainer = styled.div`
  padding: 8px;
  border-bottom: 1px solid lightgray;
  background-color: ${(props) => (props.openEdit ? "#EDCB0C" : "transparent")};
`;

export const TodoListContainer = styled.div`
  border: 1px solid lightgray;
`;

export const UpdateOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;
