import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Events_Display_Club() {
    const [organizers, setOrganizers] = useState([]);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleUpload = async () => {
      const formData = new FormData();
      formData.append('pdf', file);
  
      try {
        await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'attendance': 'multipart/form-data'
          }
        });
        alert('File uploaded successfully');
      } catch (error) {
        alert('Error uploading file');
      }
    };
    

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
    <div classname="first_class">
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
                    <th>
                        Attandance
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    organizers.map(user => {
                        return<tr>
                            <td>{user.eventName}</td>
                            <td>{user.organizer}</td>
                            <td>{user.eventVenue}</td>
                            <td>{user.eventDate}</td>
                            <td>{user.eventTime}</td>
                            <td>{user.seatsAvailable}</td>
                            <td><input type="file" accept="application/pdf" onChange={handleFileChange}/></td>
                            <td><button onClick={handleUpload}>Upload</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Events_Display_Club