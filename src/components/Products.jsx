import React from 'react'
import Product from './Product'

const Products = ({ allItems,buyItem }) => {
  return (
    <div>
      <ul>
          {
            allItems.map(item => {
              return (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                amount={item.amount}
                total={item.amount - item.buy}
                onClick={buyItem}
                buttonName="Add to Cart"/>
              )
            })
          }
      </ul>
    </div>
  )
}

Product.defaultProps = {
  allItems : []
}

export default Products
