import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPost } from '../../store/Action/TestAction';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    window.location.pathname = '/signin';
  };
  return (
    <>
      <div className="App">
        <h1 className="text-center">This is a redux demo app</h1>
        <h2 className="text-center">Welcome to the homepage</h2>
        <button className="btn btn-primary" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;
