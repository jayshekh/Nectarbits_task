// reducers.js
const initialState = {
    selectedMovie: {
      id: 1,
      title: 'Movie 1',
      genre: 'Action',
      releaseDate: '2023-01-01',
      poster: 'https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=480',
      description: 'An example movie description.',
      availableSeats: 100,
      ticketPrice: 10,
    },
    bookedTickets: {},
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BOOK_TICKET':
        const { movieId, numTickets } = action.payload;
        const selectedMovie = state.selectedMovie;
        const updatedAvailableSeats =
          selectedMovie.availableSeats - parseInt(numTickets);
  
        if (updatedAvailableSeats >= 0) {
          return {
            ...state,
            selectedMovie: {
              ...state.selectedMovie,
              availableSeats: updatedAvailableSeats,
            },
            bookedTickets: {
              ...state.bookedTickets,
              [movieId]: (state.bookedTickets[movieId] || 0) + parseInt(numTickets),
            },
          };
        } else {
          return state; // Return the same state if booking fails
        }
      default:
        return state;
    }
  };
  
  export default rootReducer;
  