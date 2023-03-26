import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidInput,setIsValidInput]=useState(true);

  const goalInputChangeHandler = event => {

    if(event.target.value === 0)
    setIsValidInput(false);
    else
    setIsValidInput(true);

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {

    if(enteredValue.trim().length === 0){
     setIsValidInput(false);
      return;
    }
   
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValidInput ? 'invalid': ''}`}>

        
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} 
        
        />
      </div>
      <br/><br/>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
