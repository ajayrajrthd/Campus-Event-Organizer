import React from 'react';
import './About.css';

function About() {
  const redirectToEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className='about'>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>
      <div className='heading'>
        <h1>Meet Our Team</h1>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="images/disha.jpg" alt="Disha" />
            <div className="container">
              <h2>Disha Poojary</h2>
              <p className="title">CEO & Founder</p>
              <p>Hello! This is Disha. I'm a comps student in A.P.Shah Institute Of Technology.</p>
              <p>dishapoojary@gmail.com</p>
              <button className="button" onClick={() => redirectToEmail('dishapoojary@gmail.com')}>Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="images/aayush.jpg" alt="Aayush" />
            <div className="container">
              <h2>Aayush Rokade</h2>
              <p className="title">Project Lead</p>
              <p>Hello! This is Aayush. I'm a comps student in A.P.Shah Institute Of Technology.</p>
              <p>aayushrokade123@gmail.com</p>
              <button className="button" onClick={() => redirectToEmail('aayushrokade123@gmail.com')}>Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="images/aditya.jpg" alt="Aditya" />
            <div className="container">
              <h2>Aditya Raorane</h2>
              <p className="title">Designer</p>
              <p>Hello! This is Aditya. I'm a student in A.P.Shah Institute Of Technology.</p>
              <p>adityaraorane@gmail.com</p>
              <button className="button" onClick={() => redirectToEmail('adityaraorane@gmail.com')}>Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="images/ajay.jpg" alt="Ajayraj" />
            <div className="container">
              <h2>Ajayraj Rathod</h2>
              <p className="title">Director</p>
              <p>Hello! This is Ajayraj. I'm a comps student in A.P.Shah Institute Of Technology.</p>
              <p>ajayrajrathod@gmail.com</p>
              <button className="button" onClick={() => redirectToEmail('ajayrajrathod@gmail.com')}>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
