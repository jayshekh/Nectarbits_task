// actions.js
export const fetchMovies = {
    // return {
    type: 'FETCH_MOVIES',
    // };
};



export const bookTicket = (movieId, numTickets) => {
    return {
        type: 'BOOK_TICKET',
        payload: { movieId, numTickets },
    };
};