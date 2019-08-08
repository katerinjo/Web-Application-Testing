import React from 'react';

export default ({ update }) => {
  return (
    <div>
      <button onClick={update}>strike</button>
      <button onClick={update}>ball</button>
      <button onClick={update}>foul</button>
      <button onClick={update}>hit</button>
    </div>
  );
};