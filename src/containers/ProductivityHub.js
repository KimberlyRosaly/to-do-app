import React from 'react'
// import { data } from '../assets/data'
import ToDoForm from '../components/forms/ToDoForm'
import { SpaceIsland } from '../components/scenes/SpaceIsland'

export default function ProductivityHub({data}) {
    return(
        <section style={{display: "flex", width: "100vw"}}>
            <ToDoForm />
            <SpaceIsland />
            {console.log(data, "Hello!")}
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