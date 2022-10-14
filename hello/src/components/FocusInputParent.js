import React, { Component } from 'react'
import InputRefChild from './InputRefChild'

class FocusInputParent extends Component {

    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }
    
  clickHandler = () => {
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <InputRefChild ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInputParent
