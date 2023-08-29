import React from 'react'
import Navigation from '../components/Navigation'
import ToDoForm from '../components/forms/ToDoForm'
// import VideoGame from '../components/VideoGame'
// import CanvasVideoGame from '../components/CanvasVideoGame'
import SVGVidgeoGame from '../components/SVGVideoGame'

export default function Nexus() {
    return(<>
        <Navigation />
        <h1>NEXUS COMPONENT</h1>
        {/* <VideoGame /> */}
        {/* <CanvasVideoGame /> */}
        <div style={{display: "flex"}}>
            <ToDoForm />
            <SVGVidgeoGame />
        </div>

    </>)
};