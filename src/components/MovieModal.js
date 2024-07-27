import React from 'react';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const MovieModal = ({ movie, onClose }) => {
  const { trailer, loading, error } = useMovieTrailer(movie.id);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-black text-white p-6 rounded-lg w-12/12 md:w-5/5 lg:w-7/12 h-[90vh] relative overflow-auto scrollbar-hide">
        <button 
          className="absolute top-4 right-4 text-2xl text-red-500 hover:text-red-700" 
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
        {loading && <p className="text-lg">Loading trailer...</p>}
        {error && <p className="text-red-500 text-lg">Error fetching trailer.</p>}
        {trailer ? (
          <div className="mb-4 aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailer}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ) : (
          !loading && <p>No trailer available.</p>
        )}
        <p className="mt-2 text-lg"><strong>Overview:</strong> {movie.overview}</p>
        <p className="mt-2 text-lg"><strong>Release Date:</strong> {movie.release_date}</p>
        <p className="mt-2 text-lg"><strong>Rating:</strong> {movie.vote_average}</p>
        {movie.genres && (
          <p className="mt-2 text-lg"><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        )}
        {movie.runtime && (
          <p className="mt-2 text-lg"><strong>Runtime:</strong> {movie.runtime} minutes</p>
        )}
      </div>
    </div>
  );
};

export default MovieModal;
