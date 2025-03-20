import React from 'react'
import { movies } from '../api/movieApi'
import MovieCard from '../components/MovieCard'
import { isloading } from '../api/movieApi'
import { moviesdata } from '../api/movieApi'
import { data } from '../api/movieApi'
const Movies = () => {
 
   if(isloading)return <h1>Loading...</h1>
   
  return (
    <div className='container'>
       <div className="row">
      {
            data.map((movies)=>(
                <MovieCard movies={movies} />
            ))
        }


        {/* second proceess */}
        {/* {
            moviesdata.map((movies)=>(
                <MovieCard movies={movies} />
            ))
        } */}
       </div>
    </div>
  )
}

export default Movies
