import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const[showModal,setShowModal]=useState(false);

  
  function showModalHandler(){
    setShowModal(true);
  }

  function closeModalHandler(){
    setShowModal(false);
  }

  console.log("Todo invoked")
  return (
    <>
    <div className='card'>
      <h2>{props.text}</h2><br></br>
      </div>
      
       <button onClick={showModalHandler}>Delete</button> 
       <div>
      {showModal && (
        <Backdrop onClick={closeModalHandler}/>
       )}

       {showModal && (
         <Modal text="Are you sure?" onClose={closeModalHandler}></Modal>
        )}
     
    </div>
    </>
  );
}

export default Todo;
