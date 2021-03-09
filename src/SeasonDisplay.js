import React from 'react';
import './SeasonDisplay.css';

const getSeason = (en, ay) => {
  console.log(`en: `, Boolean(null > 0));
  if (ay > 1 && ay < 8) {
    return en > 0 ? 'yaz' : 'kis';
  } else {
    return en > 0 ? 'kis' : 'yaz';
  }
};

const seasonDisplayConfig = {
  kis: {
    text: '.. az ilerde bahar var!',
    background:
      'https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  },
  yaz: {
    text: 'Yaz dostum!',
    background:
      'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  },
};

const SeasonDisplay = ({ enlem }) => {
  const season = getSeason(enlem, new Date().getMonth());
  const { text, background } = seasonDisplayConfig[season];

  return (
    <div
      className={`season-display ${season}`}
      style={{ background: `url(${background})` }}
    >
      <h3>{text}</h3>
    </div>
  );
};

export default SeasonDisplay;
