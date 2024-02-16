// LoginForm.js
import React, { useEffect, useState } from 'react';
import "./user.css"
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';



const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem('token');
    const verify = async (token) => {
      const response = await axios.get(`http://localhost:8000/user/api/tokenverify`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
      if (response.data.message != "Unauthorized") {
        history('/');
      }
    }
    verify(token)
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Invalid email format. Please enter a valid email address.');
        return;
      }

      if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
      }
      const response = await axios.post('http://localhost:8000/user/api/login', {
        email,
        password,
      });
      console.log(response.data.user)
      if (response.data.token) {

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user._id);
        console.log('Login successful!');
        history('/');
      }
      else {
        alert(response.data.message);
      }

    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className='Main'>
      <form className="p-20 border shadow-md form" onSubmit={handleSubmit}>
        <h1 className='text-xl font-bold text-center'>User Login</h1>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
        <h4>If you are not registered. <Link className='text-blue-500' to="/register">Register</Link></h4>

      </form>
    </div>
  );
};

export default UserLogin;
