import { useRef, useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const changePasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const newPassword = changePasswordRef.current.value;

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBeDZd-5UvQaVc4KCqBUex45uhMPw3Wr_w", {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: newPassword,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response=>{
      // assumption always succeed 
      // not doing error handling, etc

      history.replace('/');
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength='7' ref={changePasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
