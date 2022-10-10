import React from "react";
import { TimeInput } from "../styles/todoStyle";

export default function TaskTime({ input, handleChange }) {
  return (
    <TimeInput
      maxLength={2}
      placeholder='00'
      name='hours'
      onChange={handleChange}
      value={input.hours || ""}
      required></TimeInput>
  );
}