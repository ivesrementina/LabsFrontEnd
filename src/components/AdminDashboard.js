import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/Login");
  };

  return (
    <div className="dashboard-wrapper">
    <div className="dashboard-container">
      <h1 className="Header">Reviewer Dashboard</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
    <div className="BoxWrapper AdminDash">
      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div></div>

      <div className="BoxWrapper AdminDash">
      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div></div>
      <div className="BoxWrapper AdminDash">
      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla nec feugiat malesuada.</h2>
        <button className="simple-button">View</button>
      </div></div>
      </div>
      
  );
};

export default AdminDashboard;