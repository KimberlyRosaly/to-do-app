import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return(
        <>
            <Link to={'/signup'}>
                <button
                    style={{ 
                    padding: '1.75em'}}>
                        A SIGN UP BUTTON
                </button>
            </Link>
        </>
    )
}
export default Signup;

