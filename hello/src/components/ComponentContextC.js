import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentContextC extends Component {
  render() {
    return (
     <UserConsumer>
        {
            (username) => {
                return `Hi ${username}`
            }
        }
     </UserConsumer>
    )
  }
}

export default ComponentContextC
