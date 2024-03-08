import React from 'react'
import CardItem from './CardItem'
import './Club_Cards.css'

function ClubCards() {
  return (
    <div className='club_cards'>
      <h1>Clubs You Can See</h1>
      <div className='club_cards_container'>
          <ul className='club_cards_items'>
            <CardItem
              src='images/img-9.jpg'
              text='Google Developer Student Club'
              paragraph='This is GDSC'
              label='Technical'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Institute of Electrical and Electronics Engineers(IEEE)'
              paragraph='This is IEEE'
              label='Technical'
              path='/'
            />
            <CardItem
              src='images/img-3.jpg'
              text='OJUS'
              paragraph='This is OJUS'
              label='Sports/Cultural'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Antarang'
              paragraph='This is Antarang'
              label='Health'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='A.P. Shah Institute Of Technology'
              paragraph='This is APSIT'
              label='College'
              path='/sign-up'
            />
          </ul>
        </div>
    </div>
  )
}

export default ClubCards