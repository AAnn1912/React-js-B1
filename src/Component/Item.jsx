import React, { Component } from 'react'

export default class Item extends Component {
    
  render() {
    let iCon = this.props.iCon
    let conTent = this.props.conTent
    console.log(iCon)
    return (
      <div>
        <p>{iCon}</p>
        <p>{conTent}</p>
      </div>
    )
  }
}
