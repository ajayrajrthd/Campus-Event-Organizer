import "./RegisterPage.css";
import React, { useState } from "react";

function Register_Student() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    branch:"",
    year:"",
    division:"",
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
    if (values.name && values.email && values.branch && values.year && values.division) {
      setValid(true);
    }
    setSubmitted(true);
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
            value={values.name}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.name && (
          <span id="name-error">Please enter your name</span>
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
           placeholder="Select Your Branch"
           name="branch"
           value={values.branch} 
           onChange={handleInputChange}> 
           <option name="select_branch">Select Your Branch</option>
           <option name="Mechanical">Mechanical Engineering</option>
           <option name="Civil">Civil Engineering</option>
           <option name="IT">Information Technology</option>
           <option name="Computer">Computer Engineering</option>
           <option name="AIML">Artifical Intelligence and Machine Learning</option>
           <option name="DS">Data Science</option>
           </select>
        )}

        {submitted && !values.branch && (
          <span id="branch-error">Select A Branch</span>
        )}

        {!valid && (
           <select 
           class="form-field"
           type="text"
           placeholder="Select Your Year"
           name="year"
           value={values.year} 
           onChange={handleInputChange}> 
           <option name="select_year">Select Your Year</option>
           <option name="FE">First Year</option>
           <option name="SE">Second Year</option>
           <option name="TE">Third Year</option>
           <option name="BE">Fourth Year</option>
           </select>
        )}

        {submitted && !values.year && (
          <span id="branch-error">Select A Branch</span>
        )}

       {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Division"
            name="division"
            value={values.division}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.division && (
          <span id="division-error">Please enter an email address</span>
        )}

       {!valid && (
          <input
            class="form-field"
            type="number"
            placeholder="Roll Number"
            name="roll"
            value={values.roll}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.roll && (
          <span id="name-error">Please enter your Roll number</span>
        )}

        {!valid && (
          <input className={'inputButton'} type="submit" value={'Register'} />
        )}
      </form>
    </div>
    </div>
  );
}

export default Register_Student