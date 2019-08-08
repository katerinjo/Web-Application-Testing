import * as s from './sportsball';

describe('sportsball', () => {
  it('works at all', () => {
    expect(s.stub()).toBe(42); // .toBe() looks for strict equality!
  });
}); 