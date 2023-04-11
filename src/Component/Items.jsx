import React, { Component } from 'react'
import './style/style.css'
import Item from './Item'

export default class Items extends Component {
  render() {
    return (
      <div>
        <section className="Items">
            <div className="container">
                <div className="list_item">
                   <Item className="item" iCon="<i className='bx bx-collection'></i>" conTent="<h3>Fresh new layout</h3><p>With Bootstrap 5, we've created a fresh new layout for this template!</p>"/>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
