export const sportEvent = { //enum
  STRIKE: 'strike',
  BALL: 'ball',
  FOUL: 'foul',
  HIT: 'hit'
};

export default function consequence({setBalls, setStrikes}) {
  const strike = (balls, strikes) => {
    const newStrikes = strikes + 1;
    if (newStrikes >= 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setStrikes(newStrikes);
    }
  };
  return ev => {
    return {
      [sportEvent.STRIKE]: strike
    }[ev];
  };
};