// MovieList.js
import React from 'react';
import { useSelector } from 'react-redux';

const MovieList = () => {
    const movies = useSelector((state) => state.movies);

    const mlist = movies.movies;
    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {/* {movies.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))} */}

                {mlist.map((movie) => (
                    <>
                        <li key={movie.id}>
                            <img src={movie.poster} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            <p>Genre: {movie.genre}</p>
                            <p>Release Date: {movie.releaseDate}</p>
                        </li>
                        <button className='mb2'  >more details</button>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
