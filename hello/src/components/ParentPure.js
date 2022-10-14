import React, { Component } from 'react'
// import PureComp from './PureComp'
// import Regcomp from './Regcomp'
import MemoComp from './MemoComp'

export class ParentPure extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vishwas'
      }
    }
    
  componentDidMount()  {
    setInterval(() => {
        this.setState({
            name: 'Vishwas'
        })
    }, 2000)
  }

  render() {
    console.log('********Parent Component**********')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
        {/* <Regcomp name={this.state.name}/> */}
        {/* <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentPure
