import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import InputComponent from "./InputComponent";

const emailReducer = (state, action) => {
  /*console.log("action:" + JSON.stringify(action));
  console.log("state:" + JSON.stringify(state));*/

  const newState = { value: "", isValid: false };
  if (action.typo === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.typo === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  /*console.log("passwordReducer state:" + JSON.stringify(state));
  console.log("passwordReducer action:" + JSON.stringify(action));*/

  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: action.val.trim().length > 6 };

  if (action.type === "INPUT_BLUR")
    return { value: state.value, isValid: state.value.trim().length > 6 };

  return { value: "", isValid: false };
};
const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const initialState = {
    value: "",
    isValid: "",
  };

  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);

  

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialState
  );

  const{isValid : emailIsValid} = emailState;
  const{isValid : passwordIsValid} = passwordState;

  useEffect(() => {
      const timeOutVar = setTimeout(() => {
        console.log("checking validity");
        setFormIsValid(
          emailIsValid && passwordIsValid
        );
      }, 500);

      return () => {
        //console.log('Cleanup')
        clearTimeout(timeOutVar);
      };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      typo: "USER_INPUT",
      val: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: "USER_INPUT",
      val: event.target.value,
    });

   
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      typo: "INPUT_BLUR",
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: "INPUT_BLUR",
    });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       <InputComponent
            label ="Email"
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            isValid={emailState.isValid}
       /> 

          <InputComponent
            label ="Password"
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            isValid={passwordState.isValid}
       /> 
       
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
       
      </form>
    </Card>
    
  );
};

export default Login;
