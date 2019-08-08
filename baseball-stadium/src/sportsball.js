export const sportEvent = { //enum
  STRIKE: 'strike',
  BALL: 'ball',
  FOUL: 'foul',
  HIT: 'hit'
};

export default function consequence({setBalls, setStrikes}) {
  return () => setBalls(42);
};