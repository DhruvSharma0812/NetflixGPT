import React, { useEffect } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Login from './Login';
import Browse from './Browse';
import Home from './Home';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        // User is signed out
        dispatch(removeUser());
        if (window.location.pathname === '/browse') {
          navigate('/login');
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/browse', element: user ? <Browse /> : <Login /> },
    { path: '/login', element: user ? <Browse /> : <Login /> },
  ]);

  return <div>{routes}</div>;
};

export default Body;
