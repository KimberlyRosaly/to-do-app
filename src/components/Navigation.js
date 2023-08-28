import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {

    return(
        <div>
            <hr />

                <div class="navigation-container">
                    <ul class="navigation-list">
                    <li><Link to={'/'}>URL ROOT</Link></li>
                    <li><Link to={'/heart'}>HEART IS HOME</Link></li>
                    <li><Link to={'/logout'}>USER LOG OUT</Link></li>
                    </ul>
                </div>
            <hr />
        </div>
    )

} 