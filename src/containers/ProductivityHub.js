import React, { useState } from 'react';
import ToDosIndex from '../components/forms/ToDosIndex'
import SpaceIsland from '../components/scenes/SpaceIsland.js'

export default function ProductivityHub({todosData}) {

    console.log("Hello?", todosData)

    return(
        <section style={{display: "flex", width: "100vw"}}>            
            <ToDosIndex todosData={todosData} /> 
            <SpaceIsland />
        </section>
    )
};
