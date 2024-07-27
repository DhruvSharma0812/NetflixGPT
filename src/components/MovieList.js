import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies, onMovieClick }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button 
          onClick={scrollLeft} 
          className="bg-gray-200 text-black p-2 rounded-full shadow-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button 
          onClick={scrollRight} 
          className="bg-gray-200 text-black p-2 rounded-full shadow-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          &gt;
        </button>
      </div>
      <div 
        ref={containerRef} 
        className="flex overflow-x-auto scrollbar-thin space-x-4 pt-6 pb-2"
      >
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="min-w-[200px]">
              <MovieCard movie={movie} onClick={onMovieClick} />
            </div>
          ))
        ) : (
          <p className="text-center w-full text-white">No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
