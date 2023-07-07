import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Homepage.css";

const HomePage = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/Login");
    };
  

  return (
    <>
    <div >
      <h1 className="Header">Welcome To the Assignment Review APP</h1>
    </div>
    <div className="login-button"><button onClick={handleRedirect}>Login</button></div>
    </>
    
  );
};

export default HomePage;