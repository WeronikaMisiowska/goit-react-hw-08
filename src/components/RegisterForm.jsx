import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  
  const handleBackClick = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 7) {
      setError('Password must be at least 7 characters long.');
      return;
    }

    try {
      const response = await axios.post('https://connections-api.goit.global/users/signup', {
        name,
        email,
        password,
      });

      console.log('Registration successful:', response.data);

      navigate('/login'); 
    } catch (error) {
      console.error('There was an error registering:', error.response?.data || error.message);

      
      setError(error.response?.data?.message || 'Registration failed. Try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>

        {error && <p style={{ color: 'red' }}>{error}</p>} 
      </form>

      
      <button onClick={handleBackClick}>Back to Home</button>
    </div>
  );
};

export default RegisterForm;

