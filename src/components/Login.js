import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AVTAR_LOGO, Background } from "../utils/constants";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errormsg, setErrorMsg] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignInForm = () => {
    setSignIn(prevState => !prevState);
  };

  const handleButtonClick = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current ? nameRef.current.value : '';

    const msg = checkValidData(email, password);
    setErrorMsg(msg);
    if (msg) return;

    try {
      if (!isSignIn) {
        // Sign Up Logic
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Update user profile
        await updateProfile(user, { displayName: name, photoURL: AVTAR_LOGO });
        console.log('User signed up:', user);
      } else {
        // Sign In Logic
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed in:', user);
      }
    } catch (error) {
      const errorMessage = error.message;
      setErrorMsg(errorMessage);
    }
  };

  return (
    <div className="relative h-screen">
      <Header state={false} />

      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={Background}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-65"></div>
      </div>

      {/* Sign-in Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleButtonClick();
          }}
          className="bg-black bg-opacity-75 p-10 w-3/12 rounded-lg shadow-lg"
        >
          <h1 className="font-bold text-3xl text-white mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 my-2 mb-4 rounded-lg bg-gray-700 text-white shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              ref={nameRef}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 rounded-lg text-white bg-gray-700 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-lg text-white bg-gray-700 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            ref={passwordRef}
          />

          {errormsg && <p className="text-red-500">{errormsg}</p>}

          <button
            type="submit"
            className="w-full my-4 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-white mt-6 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
          <p className="text-gray-500 text-xs mt-6">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="text-blue-400 cursor-pointer">Learn more.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
