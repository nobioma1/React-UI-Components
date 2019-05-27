import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <i className="far fa-comment" onClick={() => alert('Comment 😁')}></i>
      <i className="fas fa-retweet" onClick={() => alert('Retweet 🤩')}> 6</i>
      <i className="far fa-heart" onClick={() => alert('Like ❤️')}> 4 </i>
      <i className="far fa-envelope" onClick={() => alert('Direct Message ✍🏻')}></i>
    </div>
  );
};

export default Footer;
