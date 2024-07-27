import React from "react";
import { Link } from "react-router-dom";
import { Background } from "../utils/constants";

const Hero = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center w-full h-screen bg-gray-200">
        {/* Background Image */}
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src= {Background}
          alt="Netflix Background"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-65"></div>

        {/* Text and Buttons */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white gap-9 px-4">
          <span className="text-6xl font-bold">
            Unlimited movies, TV shows and more
          </span>
          <span className="text-4xl">Join today. Cancel anytime.</span>
          <span className="text-2xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>

          <Link to="/login">
            <div className="w-full items-center gap-4 mr-4">
              <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                Get Started &gt;
              </button>
            </div>
          </Link>
        </div>

      </div>
        {/* Separation */}
        <div className="z-20 relative w-full h-3 bg-gray-800"></div>
    </div>
  );
};

export default Hero;