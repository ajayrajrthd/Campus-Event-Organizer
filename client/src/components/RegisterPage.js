import "./RegisterPage.css";
import React, { useState } from "react";
import axios from 'axios';

function RegisterPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    club: "",
    password: "",
    confirm_password: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.name && values.email && values.club && values.password && values.confirm_password) {
      try {
        await axios.post('http://localhost:5000/register', values);
        setValid(true);
        setSubmitted(true);
      } catch (error) {
        console.error('Error registering:', error);
        alert('Failed to register. Please try again.');
      }
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className="register-container">
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className='register-titleContainer'>
            <div><u>Register</u></div>
          </div>
          {submitted && valid && (
            <div className="success-message">
              <h3>
                Welcome {values.name}
              </h3>
              <div> Your registration was successful! </div>
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
            />
          )}

          {submitted && !values.email && (
            <span id="email-error">Please enter an email address</span>
          )}

          {!valid && (
            <select
              className="form-field"
              name="club"
              value={values.club}
              onChange={handleInputChange}
            >
              <option value="">Select Your Club</option>
              <option value="gdsc">Google Developer Student Club</option>
              <option value="ieee">IEEE</option>
              <option value="antrang">Antrang</option>
              <option value="ojus">OJUS</option>
              <option value="apsit">APSIT</option>
            </select>
          )}

          {submitted && !values.club && (
            <span id="club-error">Please select a club</span>
          )}

          {!valid && (
            <input
              className="form-field"
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.password && (
            <span id="password-error">Please enter a password</span>
          )}

          {!valid && (
            <input
              className="form-field"
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.confirm_password && (
            <span id="confirm-password-error">Please confirm your password</span>
          )}

          {!valid && (
            <input className={'inputButton'} type="submit" value={'Register'} />
          )}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
 