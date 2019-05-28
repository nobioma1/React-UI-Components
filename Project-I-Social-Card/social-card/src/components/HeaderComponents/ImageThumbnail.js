import React from 'react';
import './Header.css';

const ImageThumbnail = ({ avatar }) => {
  return (
    <div className="avatar">
      <img 
        src={avatar.link} 
        alt={avatar.alt} 
      />
    </div>
  );
};

export default ImageThumbnail;
