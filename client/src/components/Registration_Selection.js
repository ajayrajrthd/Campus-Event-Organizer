import React from 'react'
import { useEffect, useState } from 'react'
import './Events_Info_Display.css'
import axios from 'axios'

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

  return (
    <div classname="first_class">
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
                            <td className='action'><button className='green'>Accept</button><button className='red'>Reject</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Registation_Selection