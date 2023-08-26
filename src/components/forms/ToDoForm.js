// ====================================I M P O R T S
import React from 'react'
import { useState } from 'react'
// =======================================IMPORTSend

export default function ToDoForm() {
// -----------------------------------------S T A T E
// DECLARE VARIABLE, DECLARE A FUNCTION TO SET VARIABLE'S VALUE
const [ toDo, setTodo ] = useState([]) // USE STATE TO SET A DEFAULT VALUE : EMPTY ARRAY
// ------------------------------------------STATEend

// __________________________________________________
// COMMON CONVENTIONS FOR FORM HANDLING & SUBMISSION
const handleSubmit = (e) => {
    e.preventDefault();
    // GRAB VALUE OFF OF DOCUMENT OBJECT MODEL (DOM)
    const inputFieldValue = e.target.name.value 
    // DISPLAY VALUE TO CONSOLE = = = = = = = = = = = = = = = =T E S T I N G
    console.log('Input Box Value:', inputFieldValue, e.target, e.target.name, toDo)
    // LEVERAGE STATE > TODO ARRAY - COPY ALL EXISTING VALUES AND ADD NEW ENTRY OF INPUT BOX STRING VALUE
    setTodo([...toDo, inputFieldValue]);
    e.target.reset();
};
// __________________________________________________

    return(
                <div>        
                {/* ============================================= F O R M ======== */}
                    <div class="to-do-list-form-container">        
                        {/* TEXT : USER INSTRUCTIONS : CONTEXT DESCRIPTION */}
                        <h4 class="to-do-list-desc">INPUT<br />TO DO<br/>LIST ITEM</h4>     
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
                    APPEND TO DOs HERE | RESET UPON REFRESH
                    <hr />
                    {toDo.map((entry, iterator) => (
                            <div key={iterator}>
                                <input type="checkbox" />
                                <br />
                                {entry}
                                <hr/>
                            </div>
                        )                        
                    )}
                </div>
                {/* ============================================================== */}

                </div>
    )
};