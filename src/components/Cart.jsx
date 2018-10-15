import React from 'react'
import Product from './Product'

const Cart = ({items, removeItem}) => {
  return(
    <div>
      <ul>
          {
            items.map(item => {
              return (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                amount={item.amount}
                total={item.buy}
                onClick={removeItem}
                buttonName="Remove"/>
              )
            })
          }
      </ul>
    </div>
  )
}

export default Cart
