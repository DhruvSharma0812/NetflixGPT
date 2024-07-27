
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector (store => store.movies?.tailerVideos)
    const { trailer, loading, error } = useMovieTrailer(movieId);
    const videoUrl = `https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=${trailer}`;

    return (
        <div className='w-screen object-cover overflow-hidden'>
           {videoUrl && <iframe 
                className='w-screen aspect-video object-cover'
                src= {videoUrl}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                frameBorder= "0" 
            >
            </iframe>}
        </div>
    )
}

export default VideoBackground
