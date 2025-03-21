// api/fetchMovies.js (Data Fetching Function)
// const url = 'https://imdb236.p.rapidapi.com/imdb/top250-movies';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '64b4a3363emshb3169c3636e97f2p1cbb25jsn4baeef571c89',
//         'x-rapidapi-host': 'imdb236.p.rapidapi.com'
//     }
// };

// export const fetchMovies = async () => {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         return result; // Return the fetched movies data
//     } catch (error) {
//         console.error("Failed to fetch movies: ", error);
//         return []; // Return an empty array on error
//     }
// };



// second method
export const dummyMovies = [
    {
        id: '1',
        title: 'The Shawshank Redemption',
        year: 1994,
        rating: 9.3,
        genre: ['Drama'],
        director: 'Frank Darabont',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '2',
        title: 'The Godfather',
        year: 1972,
        rating: 9.2,
        genre: ['Crime', 'Drama'],
        director: 'Francis Ford Coppola',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '3',
        title: 'The Dark Knight',
        year: 2008,
        rating: 9.0,
        genre: ['Action', 'Crime', 'Drama'],
        director: 'Christopher Nolan',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '4',
        title: '12 Angry Men',
        year: 1957,
        rating: 9.0,
        genre: ['Drama'],
        director: 'Sidney Lumet',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '5',
        title: 'Schindler’s List',
        year: 1993,
        rating: 9.0,
        genre: ['Biography', 'Drama', 'History'],
        director: 'Steven Spielberg',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '6',
        title: 'Pulp Fiction',
        year: 1994,
        rating: 8.9,
        genre: ['Crime', 'Drama'],
        director: 'Quentin Tarantino',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '7',
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
        rating: 8.9,
        genre: ['Adventure', 'Drama', 'Fantasy'],
        director: 'Peter Jackson',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '8',
        title: 'The Good, the Bad and the Ugly',
        year: 1966,
        rating: 8.8,
        genre: ['Western'],
        director: 'Sergio Leone',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '9',
        title: 'Forrest Gump',
        year: 1994,
        rating: 8.8,
        genre: ['Drama', 'Romance'],
        director: 'Robert Zemeckis',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '10',
        title: 'Fight Club',
        year: 1999,
        rating: 8.8,
        genre: ['Drama'],
        director: 'David Fincher',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '11',
        title: 'Inception',
        year: 2010,
        rating: 8.8,
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Christopher Nolan',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '12',
        title: 'The Matrix',
        year: 1999,
        rating: 8.7,
        genre: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski, Lilly Wachowski',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '13',
        title: 'Goodfellas',
        year: 1990,
        rating: 8.7,
        genre: ['Biography', 'Crime', 'Drama'],
        director: 'Martin Scorsese',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '14',
        title: 'One Flew Over the Cuckoo’s Nest',
        year: 1975,
        rating: 8.7,
        genre: ['Drama'],
        director: 'Milos Forman',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '15',
        title: 'Seven Samurai',
        year: 1954,
        rating: 8.6,
        genre: ['Action', 'Adventure', 'Drama'],
        director: 'Akira Kurosawa',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '16',
        title: 'Se7en',
        year: 1995,
        rating: 8.6,
        genre: ['Crime', 'Drama', 'Mystery'],
        director: 'David Fincher',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '17',
        title: 'The Silence of the Lambs',
        year: 1991,
        rating: 8.6,
        genre: ['Crime', 'Drama', 'Thriller'],
        director: 'Jonathan Demme',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '18',
        title: 'The Usual Suspects',
        year: 1995,
        rating: 8.5,
        genre: ['Crime', 'Drama', 'Mystery'],
        director: 'Bryan Singer',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '19',
        title: 'Saving Private Ryan',
        year: 1998,
        rating: 8.5,
        genre: ['Drama', 'War'],
        director: 'Steven Spielberg',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '20',
        title: 'Spirited Away',
        year: 2001,
        rating: 8.5,
        genre: ['Animation', 'Adventure', 'Family'],
        director: 'Hayao Miyazaki',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
    {
        id: '21',
        title: 'Parasite',
        year: 2019,
        rating: 8.5,
        genre: ['Comedy', 'Drama', 'Thriller'],
        director: 'Bong Joon Ho',
        poster: 'https://source.unsplash.com/random/150x200?movie',
    },
   
];

