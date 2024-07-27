import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AVTAR_LOGO, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = ({ state }) => {

  const dispatch = useDispatch();
  const showGptSearch = useSelector ((store) => store.gpt.showGptSearch)

  const handleGptSearch = () => {
    // Toogle GPT Search
    dispatch(toggleGptSearch())
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.=
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex items-center justify-between w-full absolute px-8 py-2 bg-opacity-80 bg-gradient-to-b from-black z-50">
      <Link to="/" className="cursor-pointer">
        <img
          className="w-44"
          src={LOGO}
          alt="Logo"
        />
      </Link>

      {state && <div className="flex items-center gap-6">
        {showGptSearch && <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>}
        <button
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={handleGptSearch}
        >
          {showGptSearch ? "Movies" : "GPT Search"}
        </button>

        <button
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300 ease-in-out"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
        {!showGptSearch && <img
          src={AVTAR_LOGO}
          alt="User Profile"
          className="w-12 h-12"
        />}
      </div>
      }
    </div>

  );
};

export default Header;