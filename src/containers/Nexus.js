import React from 'react'
import Navigation from '../components/Navigation'
import { Footer } from "../components/Footer";
import Heading from '../components/Heading';
import ProductivityHub from '../containers/ProductivityHub'

// -------------[ HOME - HUB - DASHBOARD | FOR SIGNED IN USERS ]------------------
export default function Nexus() {
    return(<>
        <Navigation />
        <Heading />
        <ProductivityHub />
        <Footer />
    </>)
};