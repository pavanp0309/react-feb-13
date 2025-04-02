import {useState,useEffect} from 'react'
import fetchMovies from '../../api/movieApi'
import MovieCard from '../../components/common/MovieCard'

const MovieList = () => {
  const [movies,setMovies]=useState() // it store the movies fetched from an api
  console.log(movies)
//   useeffect for handling the api calls 
useEffect(()=>{
  
    let getMovies=async()=>{
        let moviesdata=await fetchMovies() // calling the api to fetch the movies
        setMovies(moviesdata) //passing the moviesadat fetched form api to display in the ui

    }

    // calling the getmovies
    getMovies()

},[])

  return (
   <div className="container my-3">
     <div className='row gy-3'>
      {
        movies?.map((movie)=>(
            <div className="col-sm-12 col-md-3 col-lg-3">
                <MovieCard movie={movie}/>
            </div>
        ))
      }
    </div>
   </div>
  )
}

export default MovieList
