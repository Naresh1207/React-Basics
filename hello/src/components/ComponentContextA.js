import React, { Component } from 'react'
import ComponentContextB from './ComponentContextB'

class ComponentContextA extends Component {
  render() {
    return <ComponentContextB />
  }
}

export default ComponentContextA
