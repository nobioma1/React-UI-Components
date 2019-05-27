import React from 'react';
import './Card.css';

const CardContent = ({ title, text, link }) => {
  return (
    <div className="card-content">
      <h1>{title}</h1>
      <p>{text}</p>
      <p className="article-link">{link}</p>
    </div>
  );
};

export default CardContent;
