import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({ele}) => {
    const {title,description,image,publishedAt}=ele
   let des= description.slice(0,50)
 
  return (
    <div className="card shadow" >
    <Link to={`/news/${title}`}>
     <img src={image} className="card-img-top" alt="..."/>
    </Link>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{des}...</p>
      <p className="card-text">{publishedAt}</p>
    </div>
  </div>
  )
}

export default NewsCard
