import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomepageAuth.css";

const HomePageAuth = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/AdminDashboard");
  };

  return (
    
    <div className="container">
      <h1>Welcome to the Assignment Review App</h1>
      <div className="BoxWrapper">
      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sem vitae ipsum convallis vulputate eget eget nisl. Aenean volutpat turpis erat, tempus pellentesque risus feugiat eget. Donec sagittis orci nec cursus porta. Aliquam varius metus sed dui cursus ultrices. Sed eu justo arcu.</h2>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sem vitae ipsum convallis vulputate eget eget nisl. Aenean volutpat turpis erat, tempus pellentesque risus feugiat eget. Donec sagittis orci nec cursus porta. Aliquam varius metus sed dui cursus ultrices. Sed eu justo arcu.</h2>
      </div>

      <div className="box">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sem vitae ipsum convallis vulputate eget eget nisl. Aenean volutpat turpis erat, tempus pellentesque risus feugiat eget. Donec sagittis orci nec cursus porta. Aliquam varius metus sed dui cursus ultrices. Sed eu justo arcu.</h2>
      </div></div>
      
      <button onClick={handleRedirect}>GO TO DASHBOARD</button>
    </div>
  );
};

export default HomePageAuth;