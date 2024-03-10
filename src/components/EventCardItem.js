import React from 'react';
import { Link } from 'react-router-dom';

function EventCardItem(properties) {
  return (
    <>
      <li className='event_cards__item'>
        <Link className='event_cards__item__link' to={properties.path}>
        <h5 className='event_cards__item__text'>{properties.text}</h5>
        </Link>
          <div className='event_cards__item__info'>
          <p className='event_cards__item__paragraph'>{properties.paragraph}</p>
          <a href={properties.anchor} className='event_cards__item__anchor'>{properties.link}</a>
          </div>
      </li>
    </>
  );
}

export default EventCardItem;