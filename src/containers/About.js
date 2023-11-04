import React from 'react';
import Navigation from '../components/Navigation.js';
import { Footer } from '../components/Footer.js';
export default function About(){
    return(
        <>
            <Navigation />
            <h1>            ABOUT PAGE HEADING</h1>
            <h2>ABOUT SECTION: </h2>
                <ul>
                <li>APPLICATION DESCRIPTION</li>
                <li>SPECIFICATIONS</li>
                </ul>
            <h2>    CONTACT SECTION:</h2>
                <ul>
                <li>EMAIL ADDRESS</li>
                </ul>  
            <Footer />
        </>
    )
};