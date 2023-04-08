import React, { Component } from 'react'
import './style/style.css'



export default class Banner extends Component {
  render() {
    return (
      <div>
        <section className="banner">
            <div className="container">
                <div className="waller">
                <h2>A warm welcome!</h2>
                <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <button>Call to action</button>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
