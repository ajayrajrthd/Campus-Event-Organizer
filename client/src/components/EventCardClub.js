import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function EventClubCard({ event }) {
  return (
    <li key={event.id} className="event_cards__item">
      <Link className="event_cards__item__link" to='/Registration_Select'>
        <h5 className="event_cards__item__text">{event.eventName}</h5>
      </Link>
      <div className="event_cards__item__info">
        <p className="event_cards__item__paragraph">{event.eventDescription}</p>
        <a href={event.bookingLink} className="event_cards__item__anchor">
          {event.bookingLink}
        </a>
      </div>
    </li>
  );
}

function EventCardClub() {
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/organizers/GDSC')
      .then(res => {
        setOrganizers(res.data);
      })
      .catch(err => {
        console.error(err);
        // Handle error
      });
  }, []);
  return (
    <ul className="event_cards">
    {organizers.map((event) => (
      <EventClubCard key={event.id} event={event} />
    ))}
  </ul>
  )
}

export default EventCardClub