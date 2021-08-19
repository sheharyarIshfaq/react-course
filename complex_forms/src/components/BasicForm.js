import { useState } from 'react';

const BasicForm = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameChangeHandler = (event)=>{
    setNameIsValid(true);
    setEnteredName(event.target.value);
  }

  const nameBlurHandler = ()=>
  {
    if(enteredName.trim() === '')
    {
      setNameIsValid(false);
    }
  }


  const formSubmitHandler = (event)=>{
    event.preventDefault();
    if(enteredName.trim() === '')
    {
      setNameIsValid(false);
      return;
    }
    console.log(enteredName);
    setEnteredName('');
  }


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
          {!nameIsValid && <p className='error-text'>Name Must Not Be Empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
