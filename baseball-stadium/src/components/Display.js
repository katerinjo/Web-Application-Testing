import React from 'react';

export default ({ balls, strikes }) => {
  return (
    <div>
      <p>BALLS: {balls}</p>
      <p>STRIKES: {strikes}</p>
    </div>
  );
};