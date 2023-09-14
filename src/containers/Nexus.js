import React from 'react'
import Navigation from '../components/Navigation'
import { Footer } from "../components/Footer";
import Heading from '../components/Heading';
import ProductivityHub from '../containers/ProductivityHub'
import { data } from '../assets/data'

// -------------[ HOME - HUB - DASHBOARD | FOR SIGNED IN USERS ]------------------
export default function Nexus() {
    return(<>
        <Navigation />
        <Heading />
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-= */}
        <ProductivityHub propsData={data} /> {/* AKA TO-DO LIST */}
        {/* IMPORTED DATA OBJECTS 
                HANDED TO CHILD COMPONENT
                        VIA PROPS */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-= */}        
        <Footer />
    </>)
};