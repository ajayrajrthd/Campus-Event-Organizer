import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [club, setClub] = useState('');

  useEffect(() => {
    // Retrieve club name from local storage
    const storedClub = localStorage.getItem('club');
    if (storedClub) {
      setClub(storedClub);
    }
  }, []);

  return (
    <div className="dashboard-container"> 
    <div className="dashboard-left">
    <img src="images/insaan1.jpg" alt="avtar" />
    <div className="club-name">{club && <p>Hello {club} !</p>}</div></div>
    <div className="bottom-right">
    <Link to='/Organize'>
      <button className="organize-btn">Organise an Event!</button>
    </Link>  
    </div>
    </div>
  );
};

export default Dashboard;
