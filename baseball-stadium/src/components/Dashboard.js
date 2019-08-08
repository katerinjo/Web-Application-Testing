import React from 'react';
import { sportEvent } from '../sportsball';

export default ({ update, balls, strikes }) => {
  return (
    <div>
      <button
        onClick={() => update(sportEvent.STRIKE)(balls, strikes)}
      >strike</button>
      <button
        onClick={() => update(sportEvent.BALL)(balls, strikes)}
      >ball</button>
      <button
        onClick={() => update(sportEvent.FOUL)(balls, strikes)}
      >foul</button>
      <button
        onClick={() => update(sportEvent.HIT)(balls, strikes)}
      >hit</button>
    </div>
  );
};