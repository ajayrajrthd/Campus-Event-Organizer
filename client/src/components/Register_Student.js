import "./RegisterPage.css";
import React, { useState } from "react";
import axios from 'axios';

function Register_Student() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    branch:"",
    year:"",
    division:"",
    moodle:""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (values.name && values.email && values.branch && values.year && values.division && values.moodle) {
      try {
        await axios.post('http://localhost:5000/register_student', values);
        setValid(true);
        setSubmitted(true);
      } catch (error) {
        console.error('Error registering:', error);
        alert('Failed to register. Please try again.');
      }
    } 
    else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className="register-container">
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className='register-titleContainer'>
            <div><center><u>Event Registration</u></center></div>
          </div>
          {submitted && valid && (
            <div className="success-message">
              <h3>Welcome {values.name}</h3>
              <div>Your registration was successful!</div>
            </div>
          )}
          {!valid && (
            <input
              className="form-field"
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          )}
          {submitted && !values.name && (
            <span id="name-error">Please enter your name</span>
          )}
          {!valid && (
            <input
              className="form-field"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            />
          )}
          {submitted && !values.email && (
            <span id="email-error">Please enter an email address</span>
          )}
          {!valid && (
            <select
              className="form-field"
              placeholder="Select Your Branch"
              name="branch"
              value={values.branch} 
              onChange={handleInputChange}
            >
              <option value="">Select Your Branch</option>
              <option value="Mechanical">Mechanical Engineering</option>
              <option value="Civil">Civil Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="Computer">Computer Engineering</option>
              <option value="AIML">Artifical Intelligence and Machine Learning</option>
              <option value="DS">Data Science</option>
            </select>
          )}
          {submitted && !values.branch && (
            <span id="branch-error">Select A Branch</span>
          )}
          {!valid && (
            <select
              className="form-field"
              placeholder="Select Your Year"
              name="year"
              value={values.year} 
              onChange={handleInputChange}
            >
              <option value="">Select Your Year</option>
              <option value="FE">First Year</option>
              <option value="SE">Second Year</option>
              <option value="TE">Third Year</option>
              <option value="BE">Fourth Year</option>
            </select>
          )}
          {submitted && !values.year && (
            <span id="year-error">Select A Year</span>
          )}
          {!valid && (
            <input
              className="form-field"
              type="text"
              placeholder="Division"
              name="division"
              value={values.division}
              onChange={handleInputChange}
            />
          )}
          {submitted && !values.division && (
            <span id="division-error">Please enter a division</span>
          )}
          {!valid && (
            <input
              className="form-field"
              type="number"
              placeholder="Moodle Id"
              name="moodle"
              value={values.moodle}
              onChange={handleInputChange}
            />
          )}
          {submitted && !values.moodle && (
            <span id="moodle-error">Please enter your Moodle ID</span>
          )}
          {!valid && (
            <input className={'inputButton'} type="submit" value={'Register'} />
          )}
        </form>
      </div>
    </div>
  );
}

export default Register_Student;
