import React from 'react';

const SignIn = () => {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1>SignIn user</h1>
          <form onSubmit={submitHandler}></form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
