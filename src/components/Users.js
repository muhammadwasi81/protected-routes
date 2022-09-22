import { useSelector } from 'react-redux';

const Users = () => {
  const users = useSelector((state) => state.Test.users);
  console.log(users, 'users');
  return (
    <>
      <div className="container">
        <h3>Users</h3>
        {users &&
          users.map((item, index) => (
            <>
              <div key={index}>
                <hr />
                <h4>{item.name}</h4>
                <p>Phone: {item.phone}</p>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Users;
