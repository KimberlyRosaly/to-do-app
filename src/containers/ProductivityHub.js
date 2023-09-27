import React, { useState } from 'react';
import ToDosIndex from '../components/forms/ToDosIndex'
import SpaceIsland from '../components/scenes/SpaceIsland.js'

export default function ProductivityHub({todosData}) {
const [completedItems, setCompletedItems] = useState([]);
// Callback function > update completed items
// parent prop passing to this child here
// child passes back updated 'completedItems' whenever an item is toggled
// THIS SEEMS TO BE ACCESSING THE SETTER DEFINED IN HERE | HAND IT SOME VALUE SOMEHOW...HOW DOES NEWCOMITEM EXIST?
// PROP CALLS FUNCTION > FUNCTION CALLS SETTER > SETTER IS HANDED A NEW VALUE
// SETTER MAKES COMPLETEDITEMS REFLECT NEW VALUE IN ARGUMENT
const updateCompletedItems = (newCompletedItems) => {
    setCompletedItems(newCompletedItems);
};
    return(
        <section style={{display: "flex", width: "100vw"}}>            
            <ToDosIndex todosData={todosData} completedItems={completedItems} updateCompletedItems={updateCompletedItems} /> 
            <SpaceIsland />
        </section>
    )
};
 
