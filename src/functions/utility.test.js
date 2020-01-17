import { isPlaceCommand } from './utility';

describe('isPlaceCommand function works', () => {
  it('placeCommand is true', () => {
    const expected = true;
    const actual = isPlaceCommand('PLACE 1,2,EAST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when without PLACE as starting', () => {
    const expected = false;
    const actual = isPlaceCommand('x PLACE 1,2,EAST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when position x is out of range', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE 6,2,EAST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when position y is out of range', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE 2,6,EAST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when position facing is out of range', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE 2,3,Ex');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when having extra character', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE 2,3,NORTH,WEST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when position x is not number', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE e,3,WEST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when position y is not number', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE 3,x,EAST');
    expect(actual).toBe(expected);
  });
});
