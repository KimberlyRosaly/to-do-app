import React from 'react';
export default function ToDosIndex({todosData}){
    return (
        <h1>
            FORM INDEX HERE
            {console.log("TODOSindex :", todosData)}
            {todosData.map((t) => {console.log(t.entry)})}
        </h1>
    )
};