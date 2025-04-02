import React from 'react'

const MovieCard = ({movie}) => {
    console.log(movie)
    const {poster_path,title,popularity,vote_average}=movie
  return (
    <div className="card shadow" >
    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..." width={"100%"} height={"300px"}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Popularity:{popularity}</p>
      <p className="card-text">rating :{vote_average}</p>
      
    </div>
  </div>
  )
}

export default MovieCard
