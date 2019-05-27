import React from 'react';
import Moment from 'moment';
import './Header.css';

const today = Moment().format('D MMM').toLowerCase();

const HeaderTitle = ({ title, handle }) => {
  return (
    <div className='header-title'>
      <h1>{title}</h1>
      <div className="header-details">
        <span>{handle}</span>
        <span> &#8226; {today}</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
