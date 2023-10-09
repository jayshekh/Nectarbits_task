// MovieDetail.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookTicket } from '../actions.js'; // Define the bookTicket action

const MovieDetail = () => {
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const dispatch = useDispatch();
  const [numTickets, setNumTickets] = useState(0);

  const handleTicketBooking = () => {
    // Dispatch the bookTicket action to update Redux store
    dispatch(bookTicket(selectedMovie.id, numTickets));
  };

  return (
    <div className=''>
      {selectedMovie && (
        <div>
          <h2>{selectedMovie.title}</h2>
          <p>Genre: {selectedMovie.genre}</p>
          <p>Release Date: {selectedMovie.releaseDate}</p>
          <p>Description: {selectedMovie.description}</p>
          <img src={selectedMovie.poster} alt={selectedMovie.title} />
          <p>Available Seats: {selectedMovie.availableSeats}</p>
          <p>Ticket Price: ${selectedMovie.ticketPrice}</p>
          <label className='textarea'>
            Number of Tickets:
            <input
              type="number"
              value={numTickets}
              onChange={(e) => setNumTickets(e.target.value)}
            />
          </label>
          <button onClick={handleTicketBooking}>Book Tickets</button>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
