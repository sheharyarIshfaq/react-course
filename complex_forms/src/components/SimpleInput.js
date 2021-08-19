import React, { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const nameInputRef = useRef();

  useEffect(()=>{
    if(nameIsValid)
    {
      setFormIsValid(true);
    }
    else
    {
      setFormIsValid(false);
    }
  }, [nameIsValid])

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if(event.target.value !== '')
    {
      setNameIsValid(true);
    }
  };

  const blurChangeHandler = (event)=>
  {
    if(enteredName.trim() === '')
    {
      setNameIsValid(false);
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(enteredName);
    // console.log(nameInputRef.current.value);
    // nameInputRef.current.value = '';
    setEnteredName("");
  };

  const inputFormClass = nameIsValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={blurChangeHandler}
        />
        {!nameIsValid && <p className="error-text">Name Must Not Be Empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
