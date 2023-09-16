import React from 'react'
// import { data } from '../assets/data'
import ToDoForm from '../components/forms/ToDoForm'
import { SpaceIsland } from '../components/scenes/SpaceIsland'
import { useState } from 'react'
// -----------------------------------------S T A T E
const [ sceneItems, setSceneItems ] = useState([]);
// sceneItems = [1,2,3,4,5] //=> ids of all scene items, in appearance order
const [ completedItems, setCompletedItems ] = useState([]);
// completedItems = [1,3,7] //=> ids of items user completed
// -----------------------------------------S T A T E
// T= COUNT # OF TICKED ITEMS
// S= COUNT # OF SCENE ITEMS
// ITERATE THROUGH SCENE ITEMS
// DISPLAY:TRUE # SCENE ITEMS

export default function ProductivityHub({propsData}) {
    return(
        <section style={{display: "flex", width: "100vw"}}>
            <ToDoForm />
            <SpaceIsland />
            {console.log(propsData, "Hello!")}
        </section>
    )
};

// FORM (BITS WITH LOGIC)
//     INPUT BOX     
//     SUBMIT BUTTON
//     TODOS INDEX
//     TODOS CHECKBOXES
    
// SCENE
    // ISLAND
    // TREE
    // MOON
    // STAR

    // change name - props usage