import React, { useState } from 'react';
import ToDoForm from '../components/forms/ToDoForm';
import ToDosIndex from '../components/forms/ToDosIndex'
import SpaceIsland from '../components/scenes/SpaceIsland.js'

export default function ProductivityHub({ todosData }) {

    // |---CALLBACK FUNCTIONS
    // | - - - - - - - - - - - - - - - - F O R M 
const [formData, setFormData] = useState('');
const handleFormSubmit = (newTodoEntry) => {
    console.log("\n (1) PRODUCTIVITY HUB: \n TODO FORM ONSUBMIT CALLBACK FN \n ", newTodoEntry);
    const updatedTodosData = [...todosData, { id: todosData.length +1, entry: newTodoEntry }];
    setFormData(newTodoEntry);
    console.log("(2) UPDATED STATE OBJECT \n formData: \n", formData)
}

    // |--- - - - - - - - - - - - - - - - C H E C K  oFF TODO
const [completedItems, setCompletedItems] = useState([]);
const updateCompletedItems = (newCompletedItems) => {setCompletedItems(newCompletedItems)};

    return(
        <section style={{display: "flex", width: "100vw"}}>    
        <div>
            <ToDoForm onSubmit={handleFormSubmit} />        
            <ToDosIndex todosData={updatedTodosData} completedItems={completedItems} updateCompletedItems={updateCompletedItems} />

        </div>
            <SpaceIsland />
        </section>
    )
};
 
