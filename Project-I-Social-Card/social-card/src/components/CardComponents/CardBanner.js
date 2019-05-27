import React from 'react';
import './Card.css';

const CardBanner = ({link, alt}) => {
  return (
    <div className="card-banner">
      <img src={link} alt={alt}/>
    </div>
  )
}

export default CardBanner;
