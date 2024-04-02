import React from 'react'
import { useEffect, useState } from 'react'
import './Events_Info_Display.css'
import axios from 'axios'
import { CSVLink } from 'react-csv'

const headers = [
    {label: 'Event Name', key: 'eventName'},
    {label: 'Organizer', key: 'organizer'},
    {label: 'Venue', key: 'eventVenue'},
    {label: 'Date', key: 'eventDate'},
    {label: 'Time', key: 'eventTime'},
    {label: 'Seats', key: 'seatsAvailable'},

]

function Events_Info_Display() {
    const [organizer, setEvents] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:5000/getEvents')
        .then(organizer => setEvents(organizer.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div classname="first_class">
        <CSVLink data={organizer} headers={headers} filename='Event Information.csv'>
        <button>Export</button>
        </CSVLink>
        <table classname="table">
            <thead>
                <tr>
                    <th>
                        Event Name
                    </th>
                    <th>
                        Organizer
                    </th>
                    <th>
                        Venue
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Time
                    </th>
                    <th>
                        Seats
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    organizer.map(user => {
                        return<tr>
                            <td>{user.eventName}</td>
                            <td>{user.organizer}</td>
                            <td>{user.eventVenue}</td>
                            <td>{user.eventDate}</td>
                            <td>{user.eventTime}</td>
                            <td>{user.seatsAvailable}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Events_Info_Display