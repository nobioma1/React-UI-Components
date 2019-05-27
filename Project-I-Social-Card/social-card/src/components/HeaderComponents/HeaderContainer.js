import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const Header = ({ avatar, content }) => {
  return (
    <div className='header'>
      <ImageThumbnail avatar={avatar} />
      <HeaderContent content={content} />
    </div>
  );
};

export default Header;
