import React from 'react'
import MovieCard from '../components/MovieCard'

const Movies = () => {
 
   if(isloading)return <h1>Loading...</h1>
   
  return (
    <div className='container'>
       <div className="row">
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
