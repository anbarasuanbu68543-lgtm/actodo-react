import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const users = props.users;
  const setUser = props.setUser;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleUinput(event) {
    setUsername(event.target.value);
  }

  function handlePinput(event) {
    setPassword(event.target.value);
  }

  function handleConfirmInput(event) {
    setConfirmPassword(event.target.value);
  }

  function addUser() {
    if (!username || !password) {
      setError('Username and password cannot be empty');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    
    setUser([...users, { user: username, password: password }]);
    navigate('/');
  }

  return (
    <div className='bg-black p-10'>
      <div className='bg-[#EFEFEF] p-10 border rounded-md'>
        <h1 className='text-3xl font-medium'>Hey hi</h1>
        <p>Sign up here</p>
        {error && <p className='text-red-500'>{error}</p>}
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
          <input
            type='password'
            placeholder='Confirm Password'
            className='w-52 border-black p-1 bg-transparent border rounded-md'
            onChange={handleConfirmInput}
          />
          <button
            className='bg-[#FCA201] w-24 rounded-md p-1'
            onClick={addUser}
          >
            SignUp
          </button>
          <p>
            Already have an account?{' '}
            <Link to={"/"} className='text-blue-500 underline'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

