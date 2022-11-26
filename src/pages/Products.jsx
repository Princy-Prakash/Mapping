import React from 'react'
import { prod } from '../data'
import Product from './Product'
import './product.css'
const Products = () => {
  return (
    <div className='dd'>
      {
        prod.map(item => (
            <Product item={item} key={item.id}/>
           
        ))
      }
      
    </div>
  )
}

export default Products
