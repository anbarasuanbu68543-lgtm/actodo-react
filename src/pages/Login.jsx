import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = props.users;

  function handleUinput(event) {
    setUsername(event.target.value);
  }

  function handlePinput(event) {
    setPassword(event.target.value);
  }

  function checkUser() {
    const userFound = users.find(
      item => item.user === username && item.password === password
    );

    if (userFound) {
      console.log("Login success");
      setError('');
      navigate('/landing',{state:{username:username}});
     
    } else {
      console.log("Login failed");
      setError('Invalid username or password. Please Sign Up if you do not have an account.');
    }
  }

  return (
    <div className='bg-black p-10'>
      <div className='bg-[#EFEFEF] p-10 border rounded-md'>
        <h1 className='text-3xl font-medium'>Hey hi</h1>
        {error ? (
          <p className='text-red-500'>{error}</p>
        ) : (
          <p>I help you manage your activity after you login :)</p>
        )}
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            placeholder='Username'
            className='w-52 border-black p-1 bg-transparent border rounded-md'
            onChange={handleUinput}
          />
          <input
            type='password'
            placeholder='Password'
            className='w-52 border-black p-1 bg-transparent border rounded-md'
            onChange={handlePinput}
          />
          <button
            className='bg-[#8272dA] w-24 rounded-md p-1'
            onClick={checkUser}
          >
            Login
          </button>
          <p>
            Don't have an account?{' '}
            <Link to={"/signup"} className='text-blue-500 underline'>SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;