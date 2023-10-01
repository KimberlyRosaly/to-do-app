import React, { useState } from 'react'; 


export default function ToDoForm({ onSubmit }) {
// -----------------------------------------S T A T E
// ------------------------------------------STATEend
// __________________________________________________
// COMMON CONVENTIONS FOR FORM HANDLING & SUBMISSION
const handleSubmit = (e) => {
    e.preventDefault();
    const inputFieldValue = e.target.name.value;
    onSubmit(inputFieldValue);
    console.log(inputFieldValue);
    e.target.reset();
  }
  
// __________________________________________________
//                          CHECKBOX (e)VENT HANDLING

// __________________________________________________
    return(
                <div className="to-do-side">        
                {/* ============================================= F O R M ======== */}
                    <div className="to-do-list-form-container">        
                        {/* TEXT : USER INSTRUCTIONS : CONTEXT DESCRIPTION */}
                        <h4 className="to-do-list-desc">INPUT<br />TO DO<br/>LIST ITEM</h4>     
                                {/* TO DO LIST FORM | 
                        WHEN FORM SUBMISSION BUTTON PRESSED > DEFINED FUNCTION
                        BUTTON CLICK (e)VENT HANDED TO FUNCTION */}
                        <form onSubmit={handleSubmit}>
                            {/* TEXT INPUT BOX */}
                            <label>To Do List Item
                                {/* SET ATTRIBUTES TO HELP UNIQUELY IDENTIFY DOM ELEMENT ON PAGE */}
                                <input type="text" name="name" />
                            </label>
                            {/* SUBMIT BUTTON */}
                            <button type="SUBMIT">SUBMIT VALUE</button>
                        </form>          
                    </div>
                </div>

    
    )
};