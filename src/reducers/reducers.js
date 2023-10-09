// reducers.js
import { fetchMovies } from '../actions';

const initialState = {
    movies: [],
};

const movieReducer = (state = initialState, action) => {
    console.log(fetchMovies.type);
    switch (fetchMovies.type) {
        case 'FETCH_MOVIES':
            // Simulate fetching movie data from an API
            const dummyMovieData = [
                {
                    id: 1,
                    title: 'Movie 1',
                    genre: 'Action',
                    releaseDate: '2023-01-01',
                    poster: 'https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=480',
                    description: 'An example movie description.',
                    availableSeats: 100,
                    ticketPrice: 10,
                },
                {
                    id: 2,
                    title: 'Movie 2',
                    genre: 'Comedy',
                    releaseDate: '2023-02-15',
                    poster: 'https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=480&h=480&dpr=1',
                    description: 'An example movie description.',
                    availableSeats: 100,
                    ticketPrice: 10,
                },
                {
                    id: 3,
                    title: 'Movie 3',
                    genre: 'Action',
                    releaseDate: '2023-02-15',
                    poster: 'https://images.pexels.com/photos/4061506/pexels-photo-4061506.jpeg?auto=compress&cs=tinysrgb&w=480&lazy=load',
                    description: 'An example movie description.',
                    availableSeats: 100,
                    ticketPrice: 10,
                },
                {
                    id: 4,
                    title: 'Movie 4',
                    genre: 'Comedy',
                    releaseDate: '2023-02-15',
                    poster: 'https://images.pexels.com/photos/2372945/pexels-photo-2372945.jpeg?auto=compress&cs=tinysrgb&w=480&lazy=load',
                    description: 'An example movie description.',
                    availableSeats: 100,
                    ticketPrice: 10,
                },
                // Add more movies here
            ];
            return {
                ...state,
                movies: dummyMovieData,
            };
        default:
            return state;
    }
};


export default movieReducer;
