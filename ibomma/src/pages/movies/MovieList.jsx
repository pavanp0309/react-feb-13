import {useState,useEffect} from 'react'
import fetchMovies,{featchMoviesBySearch} from '../../api/movieApi'
import MovieCard from '../../components/common/MovieCard'
import SearchBar from '../../components/common/SearchBar'

const MovieList = () => {
  const [movies,setMovies]=useState([]) // it store the movies fetched from an api
  const [query,setQuery]=useState('') // passing different search parmeter 
  const [isLoading,setLoading]=useState(false) // adding the loading while fetching and searching the data
  console.log(movies)

//   useeffect for handling the api calls 
useEffect(()=>{

    let moviesdata; // these varible store the movie initailiy and also store the movies when fetched(replace the fetched movie with initial data)
    
    let getMovies=async()=>{
       setLoading(true)
      //  movies based condition 
      if(query.trim()){
        moviesdata=await featchMoviesBySearch(query)
      }else{
        moviesdata=await fetchMovies("popular")
      }

      setMovies(moviesdata) 
      setLoading(false) 
    }
 
  

    // calling the getmovies
    getMovies()

},[query])


// funtion to handle the search
const handleSearch=(searchquery)=>{
     setQuery(searchquery) // these data(serach term ) is recieved from searchbar as paramater
}

if(isLoading)return <h1>Loading....</h1>

  return (
   <div className="container my-3">
    <SearchBar onSearch={handleSearch}/>
     <div className='row gy-3'>
      {
        (movies.length>0)?(
          movies?.map((movie)=>(
            <div className="col-sm-12 col-md-3 col-lg-3" key={movie.id}>
                <MovieCard movie={movie}/>
            </div>
        ))
        ):(
          <h2 className='text-danger'>{isLoading?"loading..":"nomoviesfound"}</h2>
        )
      }
    </div>
   </div>
  )
}

export default MovieList
