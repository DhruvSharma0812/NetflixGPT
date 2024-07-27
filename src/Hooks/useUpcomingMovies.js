import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = useCallback(async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            console.log(json); // For debugging purposes
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error('Error fetching upcoming movies:', error);
        }
    }, [dispatch]);

    useEffect(() => {
        getUpcomingMovies();
    }, [getUpcomingMovies]);
};

export default useUpcomingMovies;
