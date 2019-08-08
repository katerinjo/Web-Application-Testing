export const sportEvent = { //enum
  STRIKE: 'strike',
  BALL: 'ball',
  FOUL: 'foul',
  HIT: 'hit'
};

export default function consequence({setBalls, setStrikes}) {
  const curried = () => {
    setBalls(42);
    console.log('called consequence')
  };
  return curried;
};