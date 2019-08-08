import React from 'react';

export default ({ callback }) => {
  return (
    <div>
      <button onClick={callback}>strike</button>
      <button onClick={callback}>ball</button>
      <button onClick={callback}>foul</button>
      <button onClick={callback}>hit</button>
    </div>
  );
};