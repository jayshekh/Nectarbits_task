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
                    title: 'Drishyam 2',
                    genre: 'Actionthriller',
                    releaseDate: '2023-10-01',
                    poster: 'https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=480',
                    description: 'A gripping tale of an investigation and a family which is threatened by it.',
                    availableSeats: 250,
                    ticketPrice: 350,
                },
                {
                    id: 2,
                    title: 'Jawan',
                    genre: 'Action',
                    releaseDate: '2023-08-15',
                    poster: 'https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=480&h=480&dpr=1',
                    description: 'Azad is the jailer of a womens prison in Mumbai who hijacks a Mumbai Metro along with a group of six inmates Lakshmi, Eeram, Ishkra, Kalki, Helena and Janhvi.',
                    availableSeats: 500,
                    ticketPrice: 450,
                },
                {
                    id: 3,
                    title: 'Satyaprem Ki Katha',
                    genre: 'Action',
                    releaseDate: '2023-10-15',
                    poster: 'https://images.pexels.com/photos/4061506/pexels-photo-4061506.jpeg?auto=compress&cs=tinysrgb&w=480&lazy=load',
                    description: 'Will Vijay Salgaonkar be able to protect his family this time.',
                    availableSeats: 400,
                    ticketPrice: 300,
                },
                {
                    id: 4,
                    title: 'Bawaal',
                    genre: 'Action',
                    releaseDate: '2023-07-15',
                    poster: 'https://images.pexels.com/photos/2372945/pexels-photo-2372945.jpeg?auto=compress&cs=tinysrgb&w=480&lazy=load',
                    description: 'A small-town man who falls in love with the most beautiful girl in town.',
                    availableSeats: 200,
                    ticketPrice: 250,
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
