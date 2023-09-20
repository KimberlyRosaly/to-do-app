import React from 'react'
// import { data } from '../assets/data'
import ToDoForm from '../components/forms/ToDoForm'
import { SpaceIsland } from '../components/scenes/SpaceIsland'
import { useState } from 'react'
import ToDoIndex from '../components/forms/ToDoIndex'
// -----------------------------------------S T A T E
// const [sceneItems, setSceneItems] = useState([]);
// sceneItems = [1,2,3,4,5] //=> ids of all scene items, in appearance order
// const = [ completedItems, setCompletedItems ] = useState([]);
// completedItems = [1,3,7] //=> ids of items user completed
// -----------------------------------------S T A T E
// T= COUNT # OF TICKED ITEMS
// S= COUNT # OF SCENE ITEMS
// ITERATE THROUGH SCENE ITEMS
// DISPLAY:TRUE # SCENE ITEMS

const [formData, setFormData] = useState('');
const handleFormSubmit = (data) => {
    setFormData(data);
};

// SAMPLE DATA PROVIDED VIA PROP HANDED IN WITHIN PARENT
export default function ProductivityHub({todosData}) {
    return(
        <section style={{display: "flex", width: "100vw"}}>            
            <ToDoForm onSubmit={handleFormSubmit} />
            <ToDoIndex 
                sampleTodosData={todosData} 
                submittedFormData={formData} 
            />
            <SpaceIsland />
        </section>
    )
};
