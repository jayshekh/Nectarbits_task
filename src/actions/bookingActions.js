// bookingActions.js
export const selectMovie = (movie) => ({
    type: 'SELECT_MOVIE',
    payload: movie,
  });
  
  export const setNumberOfTickets = (numTickets) => ({
    type: 'SET_NUMBER_OF_TICKETS',
    payload: numTickets,
  });
  
  export const setTotalPrice = (price) => ({
    type: 'SET_TOTAL_PRICE',
    payload: price,
  });
  
  export const confirmBooking = () => ({
    type: 'CONFIRM_BOOKING',
  });
  