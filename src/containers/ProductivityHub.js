import React, { useState } from 'react';
import ToDosIndex from '../components/forms/ToDosIndex'
import SpaceIsland from '../components/scenes/SpaceIsland.js'

export default function ProductivityHub({todosData}) {
const [completedItems, setCompletedItems] = useState([]);
// Callback function > update completed items
const updateCompletedItems = (i) => {
    setCompletedItems(i);
};
    return(
        <section style={{display: "flex", width: "100vw"}}>            
            <ToDosIndex todosData={todosData} completedItems={completedItems} updateCompletedItems={updateCompletedItems} /> 
            <SpaceIsland />
        </section>
    )
};
 