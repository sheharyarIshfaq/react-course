import React, { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const inputTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Enter Todo Text</label>
      <input type="text" id="text" ref={inputTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
