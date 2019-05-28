import React from 'react';
import './Button.css';

const NumberButton = ({ value, styleName, clickHandler }) => {
  return <button onClick={() => clickHandler(value)} className={styleName}>{value}</button>;
};

export default NumberButton;
