import { useState } from 'react';

import useInput from './hooks/use-input';

const SimpleInput = (props) => {

  const   {
    value:enteredName,
    hasError:nameInputHasError,
    isValid:nameInputIsValid,
    valueChangeHandler:nameChangedHandler,
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput,
  } = useInput( value => value.trim() !== '');
  

  const   {
    value:enteredEmail,
    hasError:emailInputHasError,
    isValid:emailInputIsValid,
    valueChangeHandler:emailChangedHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput,
  } = useInput( value => value.includes('@'));


  
  


  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }




  const formSubmissionHandler = (event) => {
    event.preventDefault();

    

    if (!nameInputIsValid) {
      return;
    }

    
    resetNameInput();
    resetEmailInput();


   
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';


    const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='mail'
          id='mail'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Email is invalid</p>
        )}
      </div>


      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
