import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import EventCardItem from './EventCardItem'; // Import the EventCardList component
import axios from 'axios';

const Dashboard = () => {
  const [club, setClub] = useState('');
  const [clubEvents, setClubEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve club name from local storage
    const storedClub = localStorage.getItem('club');
    if (storedClub) {
      setClub(storedClub);

      // Fetch events for the club
      axios
        .get(`http://localhost:5000/clubs?name=${storedClub}`)
        .then((response) => {
          // Assuming the response.data contains club details including clubId
          const clubId = response.data[0].id;
          // Now fetch events for this clubId
          axios
            .get(`http://localhost:5000/clubs/${clubId}/events`)
            .then((eventsResponse) => setClubEvents(eventsResponse.data))
            .catch((eventsErr) => setError(eventsErr.message));
        })
        .catch((clubErr) => setError(clubErr.message));
    }
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <img src="images/insaan1.jpg" alt="avatar" />
        <div className="club-name">{club && <p>Hello {club} !</p>}</div>
      </div>
      <Link to="/Organize">
        <button className="organize-btn">Organise an Event!</button>
      </Link>
      <div className="events">
        <h2>Events for {club}</h2>
      </div>
      <div className="card">
        <EventCardItem events={clubEvents} />
      </div>
    </div>
  );
};

export default Dashboard;
