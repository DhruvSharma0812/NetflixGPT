import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = useCallback(async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            dispatch(addTopRatedMovies(json.results));
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
    }, [dispatch]);

    useEffect(() => {
        getTopRatedMovies();
    }, [getTopRatedMovies]);
};

export default useTopRatedMovies;
