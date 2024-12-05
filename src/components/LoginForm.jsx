import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 


  const handleBackClick = () => {
    navigate('/'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://connections-api.goit.global/users/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);

      
      const token = response.data.token;
      localStorage.setItem('token', token);

      
      navigate('/contacts');
    } catch (error) {
      console.error('There was an error logging in:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Login failed. Check your credentials.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

    
      <button onClick={handleBackClick}>Back to Home</button>
    </div>
  );
};

export default LoginForm;
