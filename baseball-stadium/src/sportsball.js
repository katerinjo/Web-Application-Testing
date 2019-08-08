export const sportEvent = { //enum
  STRIKE: 'strike',
  BALL: 'ball',
  FOUL: 'foul',
  HIT: 'hit'
};

export const stub = () => 42;

export default function consequence({setBalls, setStrikes}) {
  const curried = () => {
    setBalls(42);
    console.log('called consequence')
  };
  return curried;
};