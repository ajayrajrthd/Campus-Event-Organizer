import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Events!</h1>
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
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='The Events You have been Waiting For'
              label='Sports/Cultural'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Be Yourself,Find your innerself with ANTARANG'
              label='Health'
              path='/products'
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
  );
}

export default Cards;
