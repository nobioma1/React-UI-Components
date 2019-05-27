import React from 'react';
import './Header.css';

const HeaderTitle = ({ title, handle }) => {
  return (
    <div className='header-title'>
      <h1>{title}</h1>
      <div className="header-details">
        <span>{handle}</span>
        <span> &#8226; 26 Jan</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
