import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/Login");
    };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Welcome to the assignment review app</h1>
      <button onClick={handleRedirect}>Login</button>
    </div>
  );
};

export default HomePage;