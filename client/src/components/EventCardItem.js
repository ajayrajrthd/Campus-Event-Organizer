import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function EventCardItem() {
  const [organizer, setEvents] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:5000/getEvents')
        .then(organizer => setEvents(organizer.data))
        .catch(err => console.log(err))
    }, [])
    
  return (
    <>
      {
        organizer.map(i => {
        return <li className='event_cards__item'>
          <Link className='event_cards__item__link' to={i.bookingLink}>
          <h5 className='event_cards__item__text'>{i.eventName}</h5>
          </Link>
            <div className='event_cards__item__info'>
            <p className='event_cards__item__paragraph'>{i.eventDescription}</p>
            <a href={i.bookingLink} className='event_cards__item__anchor'>{i.bookingLink}</a>
            </div>
        </li>
        })
    }
  </>
  );
}

export default EventCardItem;