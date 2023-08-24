import React from 'react'    

export default function ToDoForm() {
    
    return(<div class="to-do-list-container">
        
                {/* TEXT : USER INSTRUCTIONS : CONTEXT DESCRIPTION */}
                <p class="to-do-list-desc">
                    INPUT TO DO LIST ITEM
                </p>
        
        
                {/* TO DO LIST FORM */}
                <form>
                    {/* TEXT INPUT BOX */}
                    <label>To Do List Item
                        <input type="text" id="input" name="input" />
                    </label>
                    {/* SUBMIT BUTTON */}
                    <button type="SUBMIT">SUBMIT VALUE</button>
                </form>
          
    </div>)
};