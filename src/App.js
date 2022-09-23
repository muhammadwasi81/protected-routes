import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import SignIn from './View/Auth/SignIn';
import Home from './View/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/signin" exact component={SignIn} />
        <ProtectedRoute exact path="/" component={Home} />
      </BrowserRouter>
    </>
  );
};

export default App;
