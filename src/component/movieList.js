// MovieList.js
import React from 'react';
import { useSelector } from 'react-redux';
import '../css/style.css'

const MovieList = () => {
    const movies = useSelector((state) => state.movies);

    const mlist = movies.movies;
    return (
        <>

            <div id="shell">

                <div id="main">
                    <div id="content">
                        <div>
                            <a href='/'>

                                <h1  >Movie List</h1>
                            </a>
                        </div>
                        <div>
                            <ul>

                                {mlist.map((movie) => (
                                    <>
                                        <div id="news">
                                            <div class="head">
                                                <div id="sub-navigation">

                                                    <li key={movie.id}>
                                                        <img class="movie-image" src={movie.poster} alt={movie.title} />
                                                        <br />
                                                        <h2 >{movie.title}</h2>
                                                        <p>Genre: {movie.genre}</p>
                                                        <p>Release Date: {movie.releaseDate}</p>
                                                    </li>
                                                    {/* <button><a href=''>{movie.title} Details</a></button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </ul>
                        </div>

                    </div>

                    <br />
                    <div id="news">
                        <div class="head">
                            <div>
                                <h1>Seleted Movie Details</h1>
                            </div>

                            <p class="text-right"><a href="#">See all</a></p>
                        </div>
                        <div class="content">
                            <div>
                                <ul>

                                    {mlist.map((movie) => (
                                        <>
                                            <div id="news">
                                                <div class="head">
                                                    <div id="sub-navigation">

                                                        <li key={movie.id}>
                                                            {/* <img class="movie-image" src={movie.poster} alt={movie.title} /> */}
                                                            <br />
                                                            <h2 >movie's title: {movie.title}</h2>
                                                            <p>genre: {movie.genre}</p>
                                                            <p>release date: {movie.releaseDate}</p>
                                                            <p>description: {movie.description}</p>
                                                            <p>available seats: {movie.availableSeats}</p>
                                                            <p>ticket price: {movie.ticketPrice}</p>
                                                        </li>
                                                        {/* <button><a href=''>{movie.title} Details</a></button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MovieList;
