import React from 'react'
import CardItem from './CardItem'
import './EventCards.css'

function EventCards() {
  return (
    <div className='cards'>
      <h1>List of All Events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the exciting events by GDSC'
              label='Technical'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Let yourself dive in technology'
              label='Technical'
              path='/'
            />
          {/* </ul>
          <ul className='cards__items'> */}
            <CardItem
              src='images/img-3.jpg'
              text='The Events You have been Waiting For'
              label='Sports/Cultural'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Events by APSIT'
              label='College'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Events by APSIT'
              label='College'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Events by APSIT'
              label='College'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Events by APSIT'
              label='College'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
export default EventCards