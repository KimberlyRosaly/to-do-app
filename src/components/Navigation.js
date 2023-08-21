import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {

    return(
        <div>
            <hr />
            <p>A  N A V I G A T I O N  BAR </p>
            <Link to={'/'}><button>URL ROOT</button></Link>
            <Link to={'/heart'}><button>HEART IS HOME</button></Link>
            <hr />
        </div>
    )

}