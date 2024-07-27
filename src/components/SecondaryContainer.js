import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import MovieModal from './MovieModal';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-black w-screen pl-4">
      <div className="-mt-52">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} onMovieClick={handleMovieClick} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} onMovieClick={handleMovieClick} />
        <MovieList title="Popular" movies={movies.popularMovies} onMovieClick={handleMovieClick} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} onMovieClick={handleMovieClick} />
        <MovieList title="Trending" movies={movies.nowPlayingMovies} onMovieClick={handleMovieClick} />
      </div>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SecondaryContainer;
