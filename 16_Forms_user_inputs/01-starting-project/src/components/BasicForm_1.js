import useInput from "./hooks/use-input";



const isNotEmpty = value => value.trim()!='';
const isEmail = value => value.includes('@');


const BasicForm_1 = (props) => {
  const {
    value: firstName,
    hasError: firstNameInputHasError,
    isValid: firstNameInputIsValid,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: lastName,
    hasError: lastNameInputHasError,
    isValid: lastNameInputIsValid,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);


  const {
    value: email,
    hasError: emailInputHasError,
    isValid: emailInputIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);


  
  let formIsValid =false;

  if(firstNameInputIsValid && lastNameInputIsValid && emailInputIsValid)
  formIsValid=true;


  const formSubmitHandler = event =>{
    event.preventDEfault();
      
     if(!formIsValid)
     return;

     console.log("Submitted");
    // console.log(firstName,lastName,email);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }


const firstNameClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
const lastNameClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
const emailClasses = emailInputHasError ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && <p className="error-text">Please enter valid firstname</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input 
          type="text" 
          id="name" 
          value={lastName}
          onChange={lastNameChangedHandler}
          onBlur={lastNameBlurHandler}
          
          />
           {lastNameInputHasError && <p className="error-text">Please enter valid lastname</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input 
        type="text" 
        id="name" 
        value={email}
        onChange={emailChangedHandler}
        onBlur={emailBlurHandler}
        />

      {emailInputHasError && <p className="error-text">Please enter valid email</p>}
      </div>
      <div className="form-actions">
        <button 
         disabled = {!formIsValid}
        >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm_1;
