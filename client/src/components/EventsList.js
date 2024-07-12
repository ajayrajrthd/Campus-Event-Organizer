import React from 'react'
import { useState } from 'react';
import './EventsList.css'
import EventCardItem from './EventCardItem';

function EventsList() {
  function getDate() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month+1}/${year}`;
  }  
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className='eventslist'>
     <h1>Events For Today</h1>
     <div className='date'>
      <h2>{currentDate}</h2>
     </div>
     <div className='event_cards'>
      <div className='event_container'>
          <ul className='event_items'>
            <EventCardItem>
            </EventCardItem>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default EventsList