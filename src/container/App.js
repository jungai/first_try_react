import React, { Component } from 'react';
import Cart from '../components/Cart'
import Products from '../components/Products'

class App extends Component {

  state = {
      allItems : [
      { id: 1, name: 'Product#1', amount: 10, buy: 0 },
      { id: 2, name: 'Product#2', amount: 9, buy: 1 },
      { id: 3, name: 'Product#3', amount: 8, buy: 0 },
      { id: 4, name: 'Product#4', amount: 7, buy: 0 },
      { id: 5, name: 'Product#5', amount: 6, buy: 0 }
    ]
  }

  inCart = () => {
    return this.state.allItems.filter( item => item.buy > 0)
  }

  avaProduct = () => {
    return this.state.allItems.filter( item => {
      return item.buy !== item.amount
    })
  }


  changeStock = (id,amount) => {
    const index = this.state.allItems.findIndex( product => product.id === id)
    const product = this.state.allItems[index]

    this.setState({
      allItems: [...this.state.allItems.slice(0,index),
      {...product, buy: product.buy + amount},...this.state.allItems.slice(index+1)]
    },() => {
      console.log('📌 after change state', this.state)
    })
  }

  buy = () => id => {
    this.changeStock(id,1)
  }

  remove = () => id => {
    this.changeStock(id,-1)
  }


  render() {
    return (
      <div className="App">
        <Products
          allItems={this.avaProduct()}
          buyItem={this.buy()}/>
        <hr/>
        <Cart
          items={this.inCart()}
          removeItem={this.remove()}/>
      </div>
    );
  }
}

export default App;
