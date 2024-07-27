
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    const { trailer, loading, error } = useMovieTrailer(movieId);
    
    // Video URL calculation, only if trailer is available
    const videoUrl = trailer 
        ? `https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=${trailer}`
        : '';

    return (
        <div className='w-screen object-cover overflow-hidden'>
            {loading && <p className="text-white">Loading...</p>}
            {error && <p className="text-red-500">Error loading video: {error.message}</p>}
            {trailer && !loading && !error && (
                <iframe 
                    className='w-screen aspect-video object-cover'
                    src={videoUrl}
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    frameBorder="0" 
                />
            )}
        </div>
    );
}

export default VideoBackground;
