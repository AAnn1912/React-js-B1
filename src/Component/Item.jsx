import React, { Component } from 'react'
import './style/style.css'

export default class Item extends Component {
    
  render() {
    let iCon = this.props.iCon
    let conTent = this.props.conTent
    let title = this.props.title
    console.log(iCon)
    return (
      <div className='item'>
        <i className={iCon}></i>
        <h3>{title}</h3>
        <p>{conTent}</p>
      </div>
    )
  }
}
