import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
    <div className='pt-[18%] px-12 absolute top-0 left-0 bg-gradient-to-r from-black w-screen aspect-video'>
            <h1 className='text-5xl text-white font-bold mb-4'> {title} </h1>
            <p className='text-lg  text-white mb-4 w-1/4'> {overview} </p>
            <div className="flex items-center space-x-2">
                <button className=" flex items-center px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300">
                    <svg
                        className="w-6 h-6 mr-2"
                        fill="#fff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M5 3.867a2 2 0 013.094-1.684l12 7.133a2 2 0 010 3.368l-12 7.133A2 2 0 015 18.133V3.867z" />
                    </svg>
                    Play
                </button>
                <button className="px-6 py-2 bg-gray-600 bg-opacity-70 text-white rounded-md hover:bg-gray-600 transition duration-300">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
