import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" exact element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
