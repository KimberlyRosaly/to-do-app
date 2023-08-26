import React from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Navigation from '../components/Navigation'

// H O M E   P A G E   C O N T A I N E R COMPONENT
export default function Home() {
    return(<>
    <Navigation />

    <h1>HOME CONTAINER COMPONENT</h1>

    <div id='portal'>

        <Signup /><Login />

    </div>
    </>)
};