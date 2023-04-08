import React, { Component } from 'react'
import './style/style.css'

export default class Items extends Component {
  render() {
    return (
      <div>
        <section className="Items">
            <div className="container">
                <div className="list_item">
                    <div className="item">
                        <i class='bx bx-collection'></i>
                        <h3>Fresh new layout</h3>
                        <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                    </div>
                    <div className="item">
                        <i class='bx bx-cloud-download'></i>
                        <h3>Free to download</h3>
                        <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                    </div>
                    <div className="item">
                        <i class='bx bx-credit-card-front'></i>
                        <h3>Jumbotron hero heade</h3>
                        <p>The heroic part of this template is the jumbotron hero header!</p>
                    </div>
                    <div className="item">
                    <i class='bx bxl-bootstrap'></i>
                    <h3>Feature boxes</h3>
                    <p>We've created some custom feature boxes using Bootstrap icons!</p>
                    </div>
                    <div className="item">
                        <i class='bx bx-code'></i>
                        <h3>Simple clean code</h3>
                        <p>We keep our dependencies up to date and squash bugs as they come!</p>
                    </div>
                    <div className="item">
                        <i class='bx bxs-badge-check'></i>
                        <h3>A name you trust</h3>
                        <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
