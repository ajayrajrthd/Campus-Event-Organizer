import React from 'react'
import CardItem from './CardItem'
import './About.css'

function About() {
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
    <div class="row">
    <div class="column">
    <div class="card">
      <img src="images/img-9.jpg" alt="Jane"/>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <a href='aayushrokade03@gmail.com'><button class="button">Contact</button></a>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="images/img-9.jpg" alt="Mike"/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="images/img-9.jpg" alt="John" />
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default About