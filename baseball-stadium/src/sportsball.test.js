import consequence, { sportEvent } from './sportsball';

describe('sportsball', () => {
  it('increments strikes', () => {
    expect(consequence(sportEvent.STRIKE)(2, 3)).toBe(42);
  });
}); 