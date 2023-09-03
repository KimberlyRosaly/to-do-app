import React from 'react'
import { Link } from 'react-router-dom'

// NOTE: TEXT DECORATION OVERRIDE NEECESSARY

export default function Navigation() {
    return(
                <nav>
                    <ul>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <li style={{ 
                                borderRadius: '5%' }}>
                                    URL ROOT
                            </li>
                        </Link>
                        <Link to={'/heart'} style={{ textDecoration: 'none' }}>
                            <li style={{ 
                                paddingTop: '1.75em',
                                paddingBottom: '1.75em' }}>
                                    HEART ♥ IS HOME
                            </li>
                        </Link>
                        <Link to={'/logout'} style={{ textDecoration: 'none' }}>
                            <li style={{ 
                                borderRadius: '5%' }}>
                                    USER LOG OUT
                            </li>
                        </Link>
                    </ul>
                </nav>
    )
} 