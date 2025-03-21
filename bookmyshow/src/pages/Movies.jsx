import React from 'react'
import MovieCard from '../components/MovieCard'
import { dummyMovies } from '../api/movieApi'

const Movies = () => {
  return (
    <div className='container'>
       <div className="row gy-2">
          {
            dummyMovies.map((movie)=>(
             <div className="col-sm-12 col-md-3 col-lg-3">
               <MovieCard  movies={movie} key={movie.id}/>
             </div>
            ))
          }
       </div>
    </div>
  )
}

export default Movies
