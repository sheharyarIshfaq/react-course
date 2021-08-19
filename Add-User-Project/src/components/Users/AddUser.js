import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";


//using state 
const AddUser = (props) => {
  const [enteredusername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredusername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError(
            {
                title: "Invalid Input!",
                message: "Please Enter a Valid Username and Age (Non-Empty Values). "
            }
        )
      return;
    }
    if (+enteredAge < 1) {
        setError(
            {
                title: "Invalid Age!",
                message: "Please Enter a Valid Age (Greater than 0). "
            }
        )
      return;
    }
    props.onAddUser(enteredusername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = ()=>
  {
      setError(null);
  }

  return (
   <React.Fragment>
       {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredusername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Username</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
   </React.Fragment>
  );
};

//using refs

// const AddUser = (props) => {

//   const inputNameRef = useRef();
//   const inputAgeRef = useRef();

//   const [error, setError] = useState();

//   const addUserHandler = (event) => {
//     event.preventDefault();
//    const enteredusername = inputNameRef.current.value;
//    const enteredAge = inputAgeRef.current.value;
//     if (enteredusername.trim().length === 0 || enteredAge.trim().length === 0) {
//         setError(
//             {
//                 title: "Invalid Input!",
//                 message: "Please Enter a Valid Username and Age (Non-Empty Values). "
//             }
//         )
//       return;
//     }
//     if (+enteredAge < 1) {
//         setError(
//             {
//                 title: "Invalid Age!",
//                 message: "Please Enter a Valid Age (Greater than 0). "
//             }
//         )
//       return;
//     }
//     props.onAddUser(enteredusername, enteredAge);
//     inputNameRef.current.value = '';
//     inputAgeRef.current.value = '';
//   };

  
//   const errorHandler = ()=>
//   {
//       setError(null);
//   }

//   return (
//    <React.Fragment>
//        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
//         <Card className={classes.input}>
//       <form onSubmit={addUserHandler}>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           ref={inputNameRef}
//         />
//         <label htmlFor="age">Username</label>
//         <input
//           type="number"
//           id="age"
//           ref={inputAgeRef}
//         />
//         <Button type="submit">Add User</Button>
//       </form>
//     </Card>
//    </React.Fragment>
//   );
// };


export default AddUser;
