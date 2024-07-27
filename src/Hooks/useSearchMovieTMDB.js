import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useSearchMovieTMDB = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchMovieTMDB = async (movie) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
            const json = await response.json();
            // Select only the first 2 movies from the results
            const limitedResults = json.results.slice(0, 2);
            return limitedResults;
        } catch (err) {
            setError(err);
            console.error('Error fetching from TMDB:', err);
            return [];
        } finally {
            setLoading(false);
        }
    };

    return { searchMovieTMDB, loading, error };
};

export default useSearchMovieTMDB;
