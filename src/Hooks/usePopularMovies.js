import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = useCallback(async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error('Error fetching popular movies:', error);
        }
    }, [dispatch]);

    useEffect(() => {
        getPopularMovies();
    }, [getPopularMovies]);
};

export default usePopularMovies;
