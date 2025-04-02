
// different ways to fetch any data in react 
// fetch 
// axios 
// react-query 
// redux-thunk 
// rtk (redux-toolkit query)

const fetchMovies=async(type="popular")=>{
    // let movies= await fetch(`${process.env.VITE_BASE_URL}/movie/${type}?api_key=${process.env.VITE_API_KEY}`)
    let movies= await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=ba3f97349079487a9e5861aaaef29632 `)
    console.log(movies) //Response {type: 'cors', url: 'https://api.themoviedb.org/3/movie/popular?api_key=ba3f97349079487a9e5861aaaef29632', redirected: false, status: 200, ok: true, …}
    let data=await movies.json()
    console.log(data) //{page: 1, results: Array(20), total_pages: 49505, total_results: 990094}
     console.log(data.results)
    return data.results 
}

export  default fetchMovies
