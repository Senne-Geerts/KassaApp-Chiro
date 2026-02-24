import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h2>Kassa programma Chiro Skippy </h2>
      <div className="button-container">
        <Link to="/kwispy">
        <button className="big-button">Kwispy</button>
        </Link>
        <Link to="/pasta">
          <button className="big-button">Pasta di skippy</button>
        </Link>
        <Link to="/kaaswijn">
          <button className="big-button">Bivak en Knabbels</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
