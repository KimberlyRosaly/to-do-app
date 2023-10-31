import React from 'react';
export default function SignUp() {
return(
        <>
            <h1> SIGN UP </h1>
            <main>
                <section>
                    <form>
<hr />
                        <label>USERNAME:
                            <input type="text" />  
                        </label>    
<br />
                        <label>PASSWORD:
                            <input type="text" />  
                        </label>    
<hr />
                        <label>EMAIL:
                            <input type="text" />  
                        </label>   
<br />
                        <label>ALIAS:
                            <input type="text" />  
                        </label>   
<hr />
                        <button>SUBMIT</button>
                    </form>
                </section>
            </main>
        </>
)
};