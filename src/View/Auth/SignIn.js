import { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    value: '',
  });
  const { name, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.password) {
      setErrorMessage((prevState) => ({
        value: 'Please fill in all fields',
      }));
    } else if (formData.name === 'fenil' && formData.password === '123456') {
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/';
    } else {
      setErrorMessage((prevState) => ({
        value: 'Invalid credentials',
      }));
    }
  };
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1>SignIn user</h1>
        </div>
        <form
          onSubmit={submitHandler}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div className="form-group">
            <label htmlFor="username">
              <input
                value={name}
                type="text"
                className="form-control"
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="username">
              <input
                value={password}
                type="password"
                className="form-control"
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {errorMessage.value && (
            <p className="text-danger">{errorMessage.value}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default SignIn;
