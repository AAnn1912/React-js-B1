import React, { Component } from 'react'
import './style/style.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
            <div className="container">
                <div className="head-content">
                    <div className="logo">Start Bootstrap</div>
                    <nav className='menu'>
                        <a href="" className='active'>Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </nav>
            </div>
            </div>
        </header>
      </div>
    )
  }
}
