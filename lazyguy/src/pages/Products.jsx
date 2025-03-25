import React from 'react'

const Products = ({product}) => {
  const {title,price,description,category,image,rating:{rate,count}}=product
  return (
    <div class="card p-3" >
    <img src={image} class="card-img-top" alt="..." style={{width:"100%", height:"150px"}}/>
    <div class="card-body">
      <h5 class="card-title">{title.slice(0,50)}</h5>
      <p class="card-text">{description.slice(0,100)}...</p>
      <p class="card-text ">Price: <span className='bg-success px-2'>{price}</span></p>
      <a href="#" class="btn btn-primary">ADDTOCART</a>
    </div>
  </div>
  )
}

export default Products
