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
                   <Item 
                   iCon="bx bx-collection" 
                   title="Fresh new layout"
                   conTent="With Bootstrap 5, we've created a fresh new layout for this template"/>
                   
                   <Item 
                   iCon="bx bx-cloud-download" 
                   title="Free to download"
                   conTent="As always, Start Bootstrap has a powerful collectin of free templates."/>
                   
                   <Item 
                   iCon="bx bx-credit-card-front" 
                   title="Jumbotron hero heade"
                   conTent="The heroic part of this template is the jumbotron hero header!"/>
                   
                   <Item 
                   iCon="bx bxl-bootstrap" 
                   title="Feature boxes"
                   conTent="We've created some custom feature boxes using Bootstrap icons!"/>
                   
                   <Item 
                   iCon="bx bx-code" 
                   title="Simple clean code"
                   conTent="We keep our dependencies up to date and squash bugs as they come!"/>
                   
                   <Item 
                   iCon="bx bxs-badge-check" 
                   title="bx bxs-badge-check"
                   conTent="Start Bootstrap has been the leader in free Bootstrap templates since 2013!"/>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
