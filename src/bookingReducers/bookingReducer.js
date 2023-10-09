// bookingReducer.js
const initialState = {
    selectedMovie: null,
    numberOfTickets: 0,
    totalPrice: 0,
    isConfirmed: false,
  };
  
  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_MOVIE':
        return {
          ...state,
          selectedMovie: action.payload,
        };
      case 'SET_NUMBER_OF_TICKETS':
        return {
          ...state,
          numberOfTickets: action.payload,
        };
      case 'SET_TOTAL_PRICE':
        return {
          ...state,
          totalPrice: action.payload,
        };
      case 'CONFIRM_BOOKING':
        return {
          ...state,
          isConfirmed: true,
        };
      default:
        return state;
    }
  };
  
  export default bookingReducer;
  