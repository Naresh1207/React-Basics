import React, { Component } from 'react'

class HoverCounterRenderProps extends Component {
  render() {
    const {count, IncrementCount} = this.props
    return <h2 onMouseOver={IncrementCount}>Hovered {count} times</h2>
  }
}

export default HoverCounterRenderProps
