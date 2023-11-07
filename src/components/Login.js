import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return(
        <div>
            <Link to={'/login'}>
                <button
                    style={{ 
                        padding: '1.75em'}}>
                            A LOG IN BUTTON
                </button>
            </Link>
        </div>
    )
}
export default Login;