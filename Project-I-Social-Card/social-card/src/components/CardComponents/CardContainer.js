import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = ({ banner, content }) => {
  return (
    <div
      className="card-container"
      onClick={() => (window.location.href = `https://${content.link}`)}
    >
      <CardBanner 
        link={banner.link} 
        alt={banner.alt} 
      />
      <CardContent
        title={content.title}
        text={content.text}
        link={content.link}
      />
    </div>
  );
};

export default CardContainer;
