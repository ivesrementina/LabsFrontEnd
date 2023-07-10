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
      <div>
        <h1 className="Header">Welcome To the Assignment Review APP</h1>
      </div>
      <div className="BoxWrapper" >
        <div className="box">
        <div className="box-content">
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sem vitae ipsum convallis vulputate eget eget nisl. Aenean volutpat turpis erat, tempus pellentesque risus feugiat eget. Donec sagittis orci nec cursus porta. Aliquam varius metus sed dui cursus ultrices. Sed eu justo arcu.</p>
        </div>
      </div>

      <div className="box">
        <div className="box-content">
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sem vitae ipsum convallis vulputate eget eget nisl. Aenean volutpat turpis erat, tempus pellentesque risus feugiat eget. Donec sagittis orci nec cursus porta. Aliquam varius metus sed dui cursus ultrices. Sed eu justo arcu.</p>
        </div>
      </div>

      <div className="box">
        <div className="box-content">
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sem vitae ipsum convallis vulputate eget eget nisl. Aenean volutpat turpis erat, tempus pellentesque risus feugiat eget. Donec sagittis orci nec cursus porta. Aliquam varius metus sed dui cursus ultrices. Sed eu justo arcu.</p>
        </div>
      </div></div>

      <div className="login-button">
        <button onClick={handleRedirect}>Login</button>
      </div>
    </>
  );
};

export default HomePage;