import "./RegisterPage.css";
import React, { useState } from "react";

function RegisterPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    club:"",
    password:"",
    confirm_password:""
  });

  const handleInputChange = (event) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name && values.email && values.club && values.password && values.confirm_password) {
      setValid(true);
    }
    setSubmitted(true);
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
              {" "}
              Welcome {values.name}{" "}
            </h3>
            <div> Your registration was successful! </div>
          </div>
        )}
        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Name"
            name="name"
            value={values.nameame}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.firstName && (
          <span id="name-error">Please enter a first name</span>
        )}

        {!valid && (
          <input
            class="form-field"
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
           class="form-field"
           type="text"
           placeholder="Select Your Club"
           name="club"
           value={values.club} 
           onChange={handleInputChange}> 
           <option name="select_club">Select Your Club</option>
           <option name="gdsc">Google Developer Student Club</option>
           <option name="ieee">IEEE</option>
           <option name="antrang">Antrang</option>
           <option name="ojus">OJUS</option>
           <option name="apsit">APSIT</option>
           </select>
        )}

        {submitted && !values.club && (
          <span id="club-error">Select A Club</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          />
        )}

        {submitted && !values.firstName && (
          <span id="password-error">Please enter a Password</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            value={values.confirm_password}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.firstName && (
          <span id="confirm-password-error">Please enter Correct Password</span>
        )}
        {!valid && (
          <input className={'inputButton'} type="submit" value={'Register'} />
        )}
      </form>
    </div>
    </div>
  );
}

export default RegisterPage