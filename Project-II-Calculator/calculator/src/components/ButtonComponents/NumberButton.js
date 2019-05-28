import React from 'react';
import './Button.css';

const NumberButton = ({ value, styleName }) => {
  return <button className={styleName}>{value}</button>;
};

export default NumberButton;
