import { useState, useReducer } from "react";

const reducerFunction = (state,action) =>{
     if(action.type === 'INPUT')
     return{ value:action.value, isTouched:state.isTouched} 

     if(action.type === 'BLUR')
     return{ value:state.value, isTouched:true} 

     if(action.type === 'RESET')
     return{ value:'', isTouched:false} 
     
}

const initialState ={
    value:'',
    isTouched:false
}
const useInput = (validateValue) =>{

 const [inputState, dispatch] = useReducer(reducerFunction,initialState);

  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);


 

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;


  const valueChangeHandler = (event) => {
    dispatch({type:'INPUT', value:event.target.value })
    //setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    dispatch({type:'BLUR' })
    //setIsTouched(true);
  };

const reset = ()=>{
    dispatch({type:'RESET' })
   // setEnteredValue('');
    //setIsTouched(false);

   
}

  return {
    value:inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }


}


export default useInput;