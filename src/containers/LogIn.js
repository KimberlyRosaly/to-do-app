import React from 'react';

export default function LogIn() {
    return(
        <>
            <h1> LOG IN </h1>
            <main>
                <section>
                    <form>
                        <label>USERNAME:
                            <input type="text" />  
                        </label>    
<br />
                        <label>PASSWORD:
                            <input type="text" />  
                        </label>    
<br />
                        <button>SUBMIT</button>
                    </form>
                </section>
            </main>
        </>
    )
};