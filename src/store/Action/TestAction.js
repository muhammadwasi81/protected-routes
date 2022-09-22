export const getAllPost = () => {
  return (dispatch) => {
    fetch(`http://jsonplaceholder.typicode.com/users`).then((res) =>
      res
        .json()
        .then((result) => dispatch({ type: 'DO_THIS', payload: result }))
        .catch((err) => console.log(err.message))
    );
  };
};
