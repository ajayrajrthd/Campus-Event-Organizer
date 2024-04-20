import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EventCard({ event }) {
  return (
    <li key={event.id} className="event_cards__item">
      <Link className="event_cards__item__link" to={event.bookingLink}>
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

function EventCardList() {
  const [organizer, setOrganizer] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/getEvents')
      .then((response) => setOrganizer(response.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="event_cards">
      {organizer.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventCardList;