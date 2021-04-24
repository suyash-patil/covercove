import React from 'react'
import {Card, Image} from 'antd'
import Meta from 'antd/lib/card/Meta'

const Product = ({product}) => {
  return (
    <Card hoverable>
      <a href={`/product/${product._id}`}>
        <img style={{ width: "210px", height: "250px", justifyContent: "center" }} src={product.image} />
        <h4>{product.name}</h4>
        <p>{product.rating} from {product.numReviews} reviews</p>
        <h6>${product.price}</h6>
      </a>
    </Card>
  )
}

export default Product
