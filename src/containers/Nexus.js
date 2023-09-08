import React from 'react'
import Navigation from '../components/Navigation'
import ToDoForm from '../components/forms/ToDoForm'
import { SpaceIsland } from '../components/scenes/SpaceIsland'
import { Footer } from "../components/Footer";
import Heading from '../components/Heading';
// -------------[ HOME - HUB - DASHBOARD | FOR SIGNED IN USERS ]------------------
export default function Nexus() {
    return(<>
        <Navigation />
        <Heading />
        <div style={{display: "flex", width: "100vw"}}>
            <ToDoForm />
            <SpaceIsland />
        </div>
        <Footer />
    </>)
};