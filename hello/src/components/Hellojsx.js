import React from "react";

const Hello = () => {
    // return(
    //     <div className="dummyClass"> 
    //         <h1>Hello Vishwas</h1>
    //     </div>
    // )

    // without jsx
    return React.createElement('div', 
    {id: "hello", className: "dummyClass"}, 
    React.createElement('h1', null, 'Hello js'))
}

export default Hello