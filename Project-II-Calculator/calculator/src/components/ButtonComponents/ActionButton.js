import React from 'react';
import './Button.css';

const ActionButton = ({ value, clickHandler }) => {
  return <button onClick={() => clickHandler(value)} className="action-btn">{value}</button>;
};

export default ActionButton;
