const url = 'https://imdb236.p.rapidapi.com/imdb/top250-movies';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '64b4a3363emshb3169c3636e97f2p1cbb25jsn4baeef571c89',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};
//real time process
export let data=[]
export let isloading=true
const MovieApi=async()=>{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        data=result
        isloading=false
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        isloading=false
        return error
    }
}

export const fetchMovies=async()=>{
    data= await MovieApi()
}
fetchMovies()


// second method
export let moviesdata=[
    {
        id:1,
        moviename:"v",
        image:"0",
        year:1027,
        director:"vishwas"
    },
    {
        id:1,
        moviename:"v",
        image:"0",
        year:1027,
        director:"vishwas"
    },
    {
        id:1,
        moviename:"v",
        image:"0",
        year:1027,
        director:"vishwas"
    },
    {
        id:1,
        moviename:"v",
        image:"0",
        year:1027,
        director:"vishwas"
    },
    {
        id:1,
        moviename:"v",
        image:"0",
        year:1027,
        director:"vishwas"
    },
    {
        id:1,
        moviename:"v",
        image:"0",
        year:1027,
        director:"vishwas"
    },
    {
        id:1,
        moviename:"v",
        image:"0",
        year:1027,
        director:"vishwas"
    }
]