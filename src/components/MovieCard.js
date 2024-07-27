import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="w-48 cursor-pointer" onClick={() => onClick(movie)}>
      <img src={IMG_CDN_URL + movie.poster_path} alt={movie.title} />
    </div>
  );
};

export default MovieCard;
