import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log(isAuthenticated);
  return (
    <>
      <Route
        {...restOfProps}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    </>
  );
};

export default ProtectedRoute;
