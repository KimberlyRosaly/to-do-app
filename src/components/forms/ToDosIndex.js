import React from 'react';
export default function ToDosIndex({todosData}){

    

    return (
        <section>
            <h4>TO DO LIST</h4>
            {/* ============================================= L I S T ======== */}       
                    <div className="to-do-list-container">
                        {todosData.map((todo, index) => (
                            <div key={index} >
                                <input type="checkbox" onChange={() => handleCheckboxChange(index)} />
                                    <br />
                                    <hr />
                                    {todo.entry}
                                    <hr />
                            </div>
                            ))}
                    </div>               
                {/* ============================================================== */}
        </section>
    )
}; 