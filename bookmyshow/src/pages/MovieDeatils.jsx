import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { dummyMovies } from '../api/movieApi'

const MovieDeatils = () => {
  const {movieId}=useParams()
  console.log(movieId)
  const navigate=useNavigate()

const movie=dummyMovies.find((m)=>m.id===movieId)
console.log(movie)

  return (
<div className="container ">
  <button className='btn btn-primary' onClick={()=>navigate("/movies")}>back</button>
<div className='card p-3 shadow my-5 border borde-danger'>
       <img src={movie.poster} alt="" className="img-fluid" />
       <p className='card-text text-success fw-bold'>{movie.title}</p>
       <p className='card-text'>Director:{movie.director}</p>
       <p className='card-text'>Rating:{movie.rating}</p>
       <p className='card-text'>Year:{movie.year}</p>
       <p className='card-text'>Genere:{movie.genre.map((ele)=>ele)}</p>
    </div>
</div>
  )
}

export default MovieDeatils
