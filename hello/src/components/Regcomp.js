import React, { Component } from 'react'

class Regcomp extends Component {
  render() {
    console.log('Regular Componet Render')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default Regcomp
