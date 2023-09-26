import React, { useState } from 'react';

export default function ToDosIndex({todosData}){

const [ completedItems, setCompletedItems ] = useState([]);

const handleCheckboxChange = (id) => {
    if (completedItems.includes(id)) {
        setCompletedItems(completedItems.filter((item) => item !== id));
    } else {
        setCompletedItems([...completedItems, id]);
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