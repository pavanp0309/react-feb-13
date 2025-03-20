import React from 'react'

const MovieCard = (props) => {
    const {}=props.movies
  return (
    <div className='card'>
       <img src="" alt=""  className='img-fluid'/>
       <div className="card-body">
        <h1 className='card-title'>{'dj'}</h1>
        <p className='card-text'>{"⭐⭐⭐"}</p>
        <p className='card-text'>{"vishwas"}</p>
        <button className='btn btn-success'>book ticket</button>
       </div>
    </div>
  )
}

export default MovieCard
