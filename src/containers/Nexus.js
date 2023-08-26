import React from 'react'
import Navigation from '../components/Navigation'
import ToDoForm from '../components/forms/ToDoForm'
import VideoGame from '../components/VideoGame'

export default function Nexus() {
    return(<>
        <Navigation />
        <h1>NEXUS COMPONENT</h1>
        <ToDoForm />

        <VideoGame />
    </>)
};