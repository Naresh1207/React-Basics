import React, { Component } from 'react'

class ClickCounterRenderProps extends Component {
  render() {
    const {count, IncrementCount} = this.props
    return <button onClick={IncrementCount}>Clicked {count} times</button>
  }
}

export default ClickCounterRenderProps
