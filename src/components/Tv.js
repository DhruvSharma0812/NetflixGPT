import React from 'react'

const Tv = () => {

    const faqs = [
        "What is Netflix?",
        "How much does Netflix cost?",
        "What can I watch on Netflix?",
        "Where can I watch?"
    ];

    return (
        <div className=' bg-black'>
            <section className="flex justify-center items-center text-white py-28">
                <div className='flex flex-col gap-6 w-1/3' >
                    <span className='text-5xl font-bold' >Enjoy on your TV</span>
                    <span className='text-2xl' >Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
                </div>

                <div className="">
                    <video src="videos/video-tv-in-0819.m4v" autoPlay loop muted ></video>
                </div>
            </section>
            <div className="z-20 relative w-full h-3 bg-gray-800"></div>

            <section className="flex justify-center items-center text-white py-7 ">
                <div className="">
                    <img src="images/mobile-0819.jpg" alt="" />
                </div>

                <div className='flex flex-col w-1/3 gap-6' >
                    <span className='text-5xl font-bold' >Download your shows to watch offline</span>
                    <span className='text-2xl' >Save your favourites easily and always have something to watch.</span>
                </div>
            </section>
            <div className="z-20 relative w-full h-3 bg-gray-800"></div>

            <section className="flex justify-center items-center text-white pb-52">
                <div className='flex flex-col w-1/3 gap-6 pt-40' >
                    <span className='text-5xl font-bold' >Watch everywhere</span>
                    <span className='text-2xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
                </div>

                <div className="relative flex mb-10 top-0">
                    <img className='absolute z-30 top-0' src="images/device-pile-in.png" alt="" />
                    <video className='relative w-1/2 left-32 top-10' src="videos/video-devices-in.m4v" autoPlay loop muted></video>
                </div>

            </section>
            <div className="z-20 relative w-full h-3 bg-gray-800"></div>

            <section className="flex justify-center items-center ml-32 text-white py-28 w-3/4 px-28">
                <div className="w-full">
                    <img src="images/children.png" alt="" />
                </div>

                <div className='flex flex-col  gap-6'>
                    <span className='text-5xl font-bold' >Create profiles for kids</span>
                    <span className='text-2xl' >Send children on adventures with their favourite characters in a space made just for them—free with
                        your membership.</span>
                </div>
            </section>
            <div className="z-20 relative w-full h-3 bg-gray-800"></div>

            <div className="py-10 text-white">
                <h2 className="text-5xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                <div className="max-w-4xl mx-auto w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700"
                        >
                            <span>{faq}</span>
                            <span className="text-2xl font-bold">+</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tv