import React, { Component } from 'react'

class Product extends Component {

  render() {

    return(
    <li>
      <div>
        <label htmlFor="name">{this.props.name}</label>
        <button
          onClick={() => this.props.onClick(this.props.id)}> {this.props.buttonName}</button>
        <button> {this.props.total}</button>
      </div>
    </li>
    )
  }
}

export default Product
