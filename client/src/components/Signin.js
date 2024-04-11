import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signin.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    error: ''
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [greeting, setGreeting] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      const { token, email } = response.data;
      localStorage.setItem('token', token);
      setLoggedIn(true);
      setGreeting(`Hello, ${email}!`);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setFormData({
            ...formData,
            error: 'Invalid email or password'
          });
        } else {
          setFormData({
            ...formData,
            error: 'An error occurred. Please try again.'
          });
        }
      } else {
        setFormData({
          ...formData,
          error: 'Network error. Please try again.'
        });
      }
    }
  };

  return (
    <div className={'mainContainer'}>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <div className={'titleContainer'}>
        <div><u>Login</u></div>
      </div>
      <br />
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className={'inputContainer'}>
          <input
            value={formData.email}
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            className={'inputBox'}
            required
          />
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={formData.password}
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleInputChange}
            className={'inputBox'}
            required
          />
        </div>
        <br />
        {formData.error && <label className="errorLabel">{formData.error}</label>}
        <br />
        <div className={'inputContainer'}>
          <input className={'inputButton'} type="submit" value={'Log in'} />
        </div>
        {loggedIn && <div className={'greeting'}>{greeting}</div>}
      </form>
    </div>
  );
};

export default Signin;
