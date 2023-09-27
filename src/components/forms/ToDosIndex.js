import React, { useState } from 'react';
// PROPS HANDED IN VIA PARENT | data object, state object, setter function 
export default function ToDosIndex({todosData, completedItems, updateCompletedItems}){
// EVENT HANDLER | CHECKBOX TICK / UNTICK [X] []
const handleCheckboxChange = (listItemID) => {
    // CONDITION | STATE:COMPLETED=ID[1,2,3] CONTAINS ID[9].DOM ELEMENT GRAB
    if (completedItems.includes(listItemID)) {

        const newCompletedItems = completedItems.filter((completedItemID) => completedItemID !== listItemID);

        updateCompletedItems(newCompletedItems); //send an updated value TO THE PARENT!!!

    } else {

        const newCompletedItems = [...completedItems, listItemID];

        updateCompletedItems(newCompletedItems);

    }

};
    return (
        <section>
            <h4>TO DO LIST</h4>
            {/* ============================================= I N D E X ======== */}       
                    <div className="to-do-list-container">
                        {todosData.map((todo) => (
                            <div key={todo.id} className={completedItems.includes(todo.id) ? 'completed' : ''} >
                                <input type="checkbox" onChange={() => handleCheckboxChange(todo.id)} />
                                <br /><hr />{todo.entry}<hr />
                            </div>
                        ))}
                    </div>               
                {/* ============================================================== */}
        </section>
    )
}; 