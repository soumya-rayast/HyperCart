import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3rem', color: '#ff4d4f' }}>404</h1>
      <p style={{ fontSize: '1.5rem', color: '#333' }}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontSize: '1.2rem' }}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default NoPage;
