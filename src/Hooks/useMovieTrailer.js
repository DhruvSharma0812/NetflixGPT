import { useState, useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const data = await response.json();
        const trailer = data.results.find((vid) => vid.type === 'Trailer');
        setTrailer(trailer ? trailer.key : null);
      } catch (err) {
        setError(err);
        console.error('Error fetching trailer:', err);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchTrailer();
    }
  }, [movieId]);

  return { trailer, loading, error };
};

export default useMovieTrailer;
