import React from 'react'

function ChildComponent(props) {
  const {greetHandler} = props

  const onClick = () => {
    if(typeof greetHandler === "function") {
      greetHandler('child')
    } 
  }

  return (
    <div>
      <button onClick={onClick}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
