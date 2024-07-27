import { useDispatch } from 'react-redux';
import openai from '../utils/openai';
import { addGptSearchMovies } from '../utils/gptSlice';
import useSearchMovieTMDB from './useSearchMovieTMDB';

const useHandleGptSearchClick = (searchText) => {
  const dispatch = useDispatch();

  // Fetch movie for specific search query from TMDB
  const { searchMovieTMDB } = useSearchMovieTMDB();

  const handleGptSearchClick = async () => {
    const query = searchText.current?.value.trim();
    if (!query) return;

    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: "${query}". Only give me names of 7 movies, comma separated without numbering. Example Result: Gadar, Sholar, Don, Golmaal, Koi Mil Gaya`;

    try {
      const GPTResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      if (!GPTResult) {
        console.error('Error in GPT result');
        return;
      }

      const gptMovies = GPTResult.choices[0]?.message?.content.split(', ').filter(Boolean);
      if (!gptMovies || gptMovies.length === 0) {
        console.error('No movies returned from GPT');
        return;
      }

      const promiseArr = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArr);
      const flattenedResults = tmdbResults.flat();

      dispatch(addGptSearchMovies({ movieName: gptMovies, movieResult: flattenedResults }));
    } catch (error) {
      console.error('Error in GPT search:', error);
    }
  };

  return handleGptSearchClick;
};

export default useHandleGptSearchClick;
