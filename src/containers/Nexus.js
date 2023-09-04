import React from 'react'
import Navigation from '../components/Navigation'
import ToDoForm from '../components/forms/ToDoForm'
import { SpaceIsland } from '../components/scenes/SpaceIsland'
import { Footer } from "../components/Footer";

export default function Nexus() {
    return(<>
        <Navigation />
        <h1>-productivity hub-</h1>
        <h2>[TO-DO LIST]</h2>
        <div style={{display: "flex", width: "100vw"}}>
            <ToDoForm />
            <SpaceIsland />
        </div>
        <Footer />
    </>)
};