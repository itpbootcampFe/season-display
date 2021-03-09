import React from 'react';
import './Spinner.css';

const Spinner = ({ text }) => {
  return (
    <div className="container">
      <div className="spinner" />
      <div clasName="text">{text} </div>
    </div>
  );
};

export default Spinner;
