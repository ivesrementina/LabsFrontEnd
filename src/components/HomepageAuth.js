import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePageAuth = () => {
  const navigate = useNavigate();
  const handleRedirect  = () => {
    navigate("/AdminDashboard");
  };

  return (
    <div>
      <h1>Welcome to the Assignment Review App</h1>
      <p>Test</p>
      <button onClick={handleRedirect }>GO TO DASHBOARD</button>
    </div>
  );
};

export default HomePageAuth;