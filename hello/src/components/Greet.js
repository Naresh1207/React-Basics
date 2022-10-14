import React from 'react'

const Greet = (props) => {
    const {name, heroName} = props
    return(
    <div>
        <h1>Functional component {name} also known as {heroName} </h1>
        {props.children}
    </div>
    )
}

export default Greet
