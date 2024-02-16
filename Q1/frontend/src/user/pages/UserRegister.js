// RegistrationForm.js
import React, { useState } from 'react';
import "./user.css"
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';


const UserRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async(e) => {
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
      const response = await axios.post('http://localhost:8000/user/api/register', {
        name,
        email,
        password,
        age,
        country
      });
      console.log(response.data)
      if(response.data.user){ 
        console.log('Login successful!');
        navigate('/login');
      }
      else{
        alert(response.data.message);
      }

      
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='Main'>
    <form className="p-20 shadow-xl form" onSubmit={handleSubmit}>
      <h1 className='text-xl font-bold text-center'>User Registration</h1>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <label>Age:</label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

      <label>Country:</label>
      <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />

      <button type="submit">Register</button>
      <h4>If you are already registered. <Link className='text-blue-500' to="/login">Login</Link></h4>

    </form>
    </div>
  );
};

export default UserRegister;
