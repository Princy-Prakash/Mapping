import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
const Product = ({item}) => {
  return (
    <div className='divss'> 
        <img src={item.img} alt="" />
      <h1>{item.name}</h1>
      <p>{item.desc}</p> 
     <Link to = {`/${item.name}`}> <button  item={item}>detial</button></Link>
    </div>
  )
}

export default Product
