import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AVTAR_LOGO, Background } from "../utils/constants";

const Login = () => {

  const [isSignIn, setSignIn] = useState(true);
  const [errormsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null); // They are the refrene to input box
  const name = useRef (null);

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // Validate the form data
    // console.log(email.current.value)
    // console.log(password.current.value)

    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);
    // console.log(msg);

    if (msg) return;

    // Sign In / Sign Up Logic
    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value ,
            photoURL: AVTAR_LOGO
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
      });

    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log (user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg (errorCode + " - " + errorMessage)
        });
    }
  };

  return (
    <div className="relative h-screen">
      <Header state = {false} />

      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src= {Background}
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black opacity-65"></div>
      </div>

      {/* Sign-in Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form
          onSubmit={(e) => e.preventDefault()}
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
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-3 mb-4 rounded-lg text-white bg-gray-700 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-lg text-white bg-gray-700 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            ref={password}
          />

          <p className="text-red-500"> {errormsg} </p>

          <button
            type="submit"
            className="w-full my-4 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-white mt-6 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn
              ? "New to Netflix Sign Up Now"
              : "Alerady Registered Sing In Now"}
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