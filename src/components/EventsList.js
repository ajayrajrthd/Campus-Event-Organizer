import React from 'react'
import { useState } from 'react';
import './EventsList.css'
import EventCardItem from './EventCardItem';

function EventsList() {
  function getDate() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month+1}/${year}`;
  }  
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className='eventslist'>
     <h1>Events For Today</h1>
     <div className='date'>
      <h2>{currentDate}</h2>
     </div>
     <div className='event_cards'>
      <div className='event_container'>
          <ul className='event_items'>
            <EventCardItem
              text='Google Developer Student Club'
              paragraph='🥁Uncharted waters await as GDSC APSIT gears up for a thrilling new event. Brace yourselves for an epic voyage into the unknown seas of innovation. 
              Shiver me timbers, for the tech treasures buried in the challenges ahead are sure to leave you on the edge of your seat! Behold as the first clue drops soon ⚓🪙💰
              💣Check out the new story here:https://www.instagram.com/stories/gdsc.apsit/3316397279233697801?utm_source=ig_story_item_share&igsh=MTlzdHN3dWVqMmY0bg==
              #GetSetInnovate'
              link='💌Follow all the *_social media_* handles to never miss any updates'
              label='Technical'
              path='/'
              anchor='https://linktr.ee/gdsc_apsit'
            />
            <EventCardItem
              text='Institute of Electrical and Electronics Engineers(IEEE)'
              paragraph='This is IEEE'
              label='Technical'
              path='/'
            />
            <EventCardItem
              text='OJUS Cultural'
              paragraph='🫶🏻Get Ready 🫶🏻
              ✨To Score✨
              ✨To Dodge✨
              ✨To Lock✨
              because...
                 We have made your Saturday better with SCATTER BALL🥳
                               
              Do participate with a team of 4 ..!!!!
               Scatter ball is combination of dodge ball , lock and key and Handball  ,all this games we know since childhood 🫶🏻  
              
              Dont know how to play ? Dont worry we will help you out Tommorow ..!!
              Rules will be explained to you in simple way ..!!!
              
              Give Scatter ball a try A NEW GAME , A NEW FUN 💫
              Venue : old GCR(208)
              Time: 9 am onwards'
              link='Fill out this form asap'
              label='Sports/Cultural'
              path='/services'
              anchor='https://docs.google.com/forms/d/e/1FAIpQLScXVLdkneGCiUvzsoAn91bH8yxWMen3tCeHWFYbPThCMhyPVw/viewform?vc=0&c=0&w=1&flr=0'
            />
            <EventCardItem
              text='Antarang'
              paragraph='This is Antarang'
              label='Health'
              path='/products'
            />
            <EventCardItem
              text='A.P. Shah Institute Of Technology'
              paragraph='🎓Hello APSITIANS!! 🎓
              Exciting News!!!🚀 Join us for an exclusive LinkedIn and Profile Building Seminar designed just for you! 🌐✨
              
              📆 Date: 31st January 2024 🕒 Time: 3-5 pm 
              📍 Venue: Seminar Hall - 112
              
              Unlock the secrets to creating a standout LinkedIn profile and building a powerful online presence! 🌐💼
              
              🎓 Learn how to:
              
              1) Optimize your LinkedIn profile.
              2) Showcase your skills and achievements.
              3) Network effectively.
              4) Boost your professional visibility.
              
              🚀 Dont miss out on this golden opportunity to enhance your online presence and open doors to exciting career opportunities! 💡✨
              Lets build your digital identity together! 💻🌐
              
              See you there! 🤝🎉'
              link='📌 Register now using the Google Form'
              label='College'
              path='/sign-up'
              anchor='https://forms.gle/Cnf7woeMxVGa6NPWA'
            />
          </ul>
        </div>
    </div>
    </div>
  )
}

export default EventsList