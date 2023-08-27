import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {

    return(
        <div>
            <hr />
                <p>A  N A V I G A T I O N  BAR </p>
                <div class="navigation-container">
                    <ul class="navigation-list">
                    <li><Link to={'/'}><button>URL ROOT</button></Link></li>
                    <li><Link to={'/heart'}><button>HEART IS HOME</button></Link></li>
                    <li><Link to={'/logout'}><button>USER LOG OUT</button></Link></li>
                    </ul>
                </div>
            <hr />
        </div>
    )

} 