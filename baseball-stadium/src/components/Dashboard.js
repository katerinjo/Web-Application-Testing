import React from 'react';
import { sportEvent } from '../sportsball';

export default ({ update }) => {
  return (
    <div>
      <button onClick={() => update(sportEvent.STRIKE)}>strike</button>
      <button onClick={() => update(sportEvent.BALL)}>ball</button>
      <button onClick={() => update(sportEvent.FOUL)}>foul</button>
      <button onClick={() => update(sportEvent.HIT)}>hit</button>
    </div>
  );
};