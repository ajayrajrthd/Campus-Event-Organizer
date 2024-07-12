import React from 'react'
import { useEffect, useState } from 'react'
import './Events_Info_Display.css'
import axios from 'axios'
import emailjs from '@emailjs/browser'
import EmailExtractor from './EmailExtractor'

const header = [
    {label: 'Name', key: 'name'},
    {label: 'Email', key: 'email'},
    {label: 'Branch', key: 'branch'},
    {label: 'Year', key: 'year'},
    {label: 'Division', key: 'division'},
    {label: 'Moodle', key: 'moodle'},

]

function Registation_Selection() {
    const [students, setEvents] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:5000/getRegistration')
        .then(students => setEvents(students.data))
        .catch(err => console.log(err))
    }, [])

    const [email, setEvent] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/email")
        .then((response) => {
        const emails = setEvent(response.data);
        console.log("Emails:", emails);
     })
        .catch((error) => {
        console.error("Error fetching emails:", error);
     });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_od0c8bz';
        const templateId = 'template_883nwt5';
        const publicKey = 'bmOd080D0VBGlMg2V';

    const templateParam = {
        to_name:'User',
        from_name:'WONDERFEST',
        message:'This is a test message from wonderfest about the confirmation',
        to_user:email,
    };

    emailjs.send(serviceId, templateId, templateParam, publicKey)
     .then((response) => {
        console.log("Email Sent Successfully!", response);
        alert("Email Sent Successfully!")
     })
     .catch((err) => {
        console.log("Error Sending Email",err);
     });
    }


  return (
    <div classname="first_class">
        <h1 style={{backgroundColor: "grey" , color: "white", padding: '10px'}}>Manual Selection</h1>
        <table classname="table">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Branch
                    </th>
                    <th>
                        Year
                    </th>
                    <th>
                        Division
                    </th>
                    <th>
                        Moodle ID
                    </th>
                    <th>
                        Send Email
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(i => {
                        return<tr>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.branch}</td>
                            <td>{i.year}</td>
                            <td>{i.division}</td>
                            <td>{i.moodle}</td>
                            <td className='action'><button className='green' onClick={handleSubmit}>Sent Confirmation</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        
        <h1 style={{backgroundColor: "grey" , color: "white", padding: '10px'}}>Upload CSV</h1>
        <EmailExtractor/>
    </div>
  )
}

export default Registation_Selection