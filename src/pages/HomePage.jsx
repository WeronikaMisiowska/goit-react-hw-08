
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Phonebook</h1>
      <p>Please register or login to access your contacts.</p>
      <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;


