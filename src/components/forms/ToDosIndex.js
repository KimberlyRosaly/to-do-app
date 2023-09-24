import React, { useState } from 'react';
export default function ToDosIndex({todosData}){
const [ completedItems, setCompletedItems ] = useState([]);
const handleCheckboxChange = (index) => {
    if (completedItems.includes(index)) {
        setCompletedItems(completedItems.filter((item) => item !== index));
    } else {
        setCompletedItems([...completedItems, index]);
    }
};
    return (
        <section>
            <h4>TO DO LIST</h4>
            {/* ============================================= I N D E X ======== */}       
                    <div className="to-do-list-container">
                        {todosData.map((todo, index) => (
                            <div key={index} className={completedItems.includes(index) ? 'completed' : ''} >
                                <input type="checkbox" onChange={() => handleCheckboxChange(index)} />
                                <br /><hr />{todo.entry}<hr />
                            </div>
                        ))}
                    </div>               
                {/* ============================================================== */}
        </section>
    )
}; 