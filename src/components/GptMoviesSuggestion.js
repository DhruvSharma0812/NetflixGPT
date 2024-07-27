import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import MovieModal from './MovieModal';

const GptMoviesSuggestion = () => {
  const { movieResult, movieName } = useSelector((store) => store.gpt);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  if (!movieName || movieName.length === 0) {
    return <div><h1>No Movie Found in Database</h1></div>;
  }

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <MovieList 

          movies={movieResult}
          onMovieClick={handleMovieClick}
        />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default GptMoviesSuggestion;
