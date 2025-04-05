import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import EventCardClub from './EventCardClub';
import axios from 'axios';

const Dashboard = () => {
  // const [events, setEvents] = useState([]);
  const clubName = "GDSC"; // Replace with your club name

  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <img src="images/insaan1.jpg" alt="avatar" />
        <div className="club-name">{clubName && <p>Hello {clubName} !</p>}</div>
      </div>
      <Link to="/Organize">
        <button className="organize-btn">Organise an Event</button>
      </Link>
      <Link to="/Events_Club">
        <button className="event-btn">Events</button>
      </Link>
      <div className="events">
        <h2>Events for {clubName}</h2>
      </div>
      <div className="card">
        <EventCardClub/>
      </div>
    </div>
  );
};

export default Dashboard;
