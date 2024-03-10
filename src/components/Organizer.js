import React, { useState } from 'react';
import './Organizer.css';

function Organizer() {
  const [organizer , setOrganizer] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState('');
  const [bookingLink, setBookingLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Organizer Name:", organizer);
    console.log("Event Name:", eventName);
    console.log("Event Description:", eventDescription);
    console.log("Event Venue:", eventVenue);
    console.log("Event Date:", eventDate);
    console.log("Event Time:", eventTime);
    console.log("Seats Required:", seatsAvailable);
    console.log("Booking Link:", bookingLink);
    alert("Event Submitted!");
    // You can add further logic here, like sending the data to a server
  };

  return (
    <div className='form-container'>
    <div className='form-container-inside'>
      <h1>Organize An Event!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="organizer">Organizer Name:</label>
        <input
          type="text"
          id="organizer"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
          required
        /><br/><br/>

        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        /><br/><br/>
        
        <label htmlFor="eventDescription">Event Description:</label><br/>
        <textarea
          id="eventDescription"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          rows="4"
          required
        /><br/><br/>
        
        <label htmlFor="eventVenue">Event Venue:</label>
        <input
          type="text"
          id="eventVenue"
          value={eventVenue}
          onChange={(e) => setEventVenue(e.target.value)}
          required
        /><br/><br/>
        
        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        /><br/><br/>

        <label htmlFor="eventTime">Event Time:</label>
        <input
          type="time"
          id="eventTime"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          required
        /><br/><br/>
        
        <label htmlFor="seatsAvailable">Seats Required:</label>
        <input
          type="number"
          id="seatsAvailable"
          value={seatsAvailable}
          onChange={(e) => setSeatsAvailable(e.target.value)}
          required
        /><br/><br/>
        
        <label htmlFor="bookingLink">Booking Link:</label>
        <input
          type="url"
          id="bookingLink"
          value={bookingLink}
          onChange={(e) => setBookingLink(e.target.value)}
          placeholder="https://bookyourseat.com"
        /><br/><br/>
        
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Organizer;
