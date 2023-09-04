// ====================================I M P O R T S
import React from 'react'
import { useState } from 'react'
// =======================================IMPORTSend

export default function ToDoForm() {
// -----------------------------------------S T A T E
// DECLARE VARIABLE, DECLARE A FUNCTION TO SET VARIABLE'S VALUE
const [ toDos, setToDos ] = useState([]) // USE STATE TO SET A DEFAULT VALUE : EMPTY ARRAY

const [ completedItems, setCompletedItems ] = useState([]);
// ------------------------------------------STATEend

// __________________________________________________
// COMMON CONVENTIONS FOR FORM HANDLING & SUBMISSION
const handleSubmit = (e) => {
    e.preventDefault();
    // GRAB VALUE OFF OF DOCUMENT OBJECT MODEL (DOM)
    const inputFieldValue = e.target.name.value 
    // DISPLAY VALUE TO CONSOLE = = = = = = = = = = = = = = = =T E S T I N G
    console.log('Input Box Value:', inputFieldValue, e.target, e.target.name, toDos)
    // LEVERAGE STATE > TODO ARRAY - COPY ALL EXISTING VALUES AND ADD NEW ENTRY OF INPUT BOX STRING VALUE
    setToDos([...toDos, inputFieldValue]);
    e.target.reset();
};


// __________________________________________________
//                          CHECKBOX (e)VENT HANDLING
const handleCheckboxChange = (index) => {

    if (completedItems.includes(index)) {
        setCompletedItems(completedItems.filter((item) => item !== index));
    } else {
        setCompletedItems([...completedItems, index]);
    }

};
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
                {/* ============================================================== */}
                {/* ============================================= L I S T ======== */}
                <div>
                    <h4>TO DO LIST</h4>
                    <div class="to-do-list-container">
                        {toDos.map((entry, index) => (
                                <div key={index} className={completedItems.includes(index) ? 'completed' : ''}>
                                    <input type="checkbox" onChange={() => handleCheckboxChange(index)} />
                                    <br />
                                    <hr />
                                    {entry}
                                    <hr />
                                    
                                </div>
                            )                        
                        )}
                    </div>
                </div>
                {/* ============================================================== */}

                </div>
    )
};