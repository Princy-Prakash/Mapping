import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link,useParams} from 'react-router-dom'
import { prod } from '../data'

const ProductDetail = () => {
    const [singleProduct,setSingleProduct] = useState([])

    const {name} = useParams();
    useEffect(() => {
        const findProduct = () => {
            const newProduct = prod.find((product) => product.name === name)
            setSingleProduct(newProduct)
            console.log(newProduct)
        }
        findProduct()
    })
  return (
    <div>
     {name}<br></br>
     {singleProduct.id}<br></br>
    <img src={singleProduct.img} /><br></br>
     {singleProduct.desc}<br></br>
    </div>
  )
}

export default ProductDetail
