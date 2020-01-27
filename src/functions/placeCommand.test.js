import PlaceCommand from './placeCommand';

describe('Place command', () => {
  it('Could verify it is place command', () => {
    const placeString = 'PLACE 1,1,NORTH';
    const expected = new PlaceCommand(placeString);
    const actual = PlaceCommand.tryParse(placeString);
    expect(actual).toEqual(expected);
  });

  it('Could verity it is not place command when command without PLACE as beginning', () => {
    const placeString = 'MPLACE 1,1,NORTH';
    const expected = null;
    const actual = PlaceCommand.tryParse(placeString);
    expect(actual).toEqual(expected);
  });

  it('Could verity it is not place command when command with location x which could not be converted to number', () => {
    const placeString = 'PLACE 1x,1,NORTH';
    const expected = null;
    const actual = PlaceCommand.tryParse(placeString);
    expect(actual).toEqual(expected);
  });

  it('Could verity it is not place command when command with location y which could not be converted to number', () => {
    const placeString = 'PLACE 1,1x,NORTH';
    const expected = null;
    const actual = PlaceCommand.tryParse(placeString);
    expect(actual).toEqual(expected);
  });

  it('Could verity it is not place command when command with location facing which is invalid value', () => {
    const placeString = 'PLACE 1,1x,NORTHS';
    const expected = null;
    const actual = PlaceCommand.tryParse(placeString);
    expect(actual).toEqual(expected);
  });

  it('Could verity it is not place command when command with location x is greater than 4', () => {
    const placeString = 'PLACE 5,1,NORTHS';
    const expected = null;
    const actual = PlaceCommand.tryParse(placeString);
    expect(actual).toEqual(expected);
  });

  it('Could verity it is not place command when command with location y is greater than 4', () => {
    const placeString = 'PLACE 2,5,NORTHS';
    const expected = null;
    const actual = PlaceCommand.tryParse(placeString);
    expect(actual).toEqual(expected);
  });

  it('Could verity it is not place command when command with length of location is greater than 3', () => {
    const placeString = 'PLACE 2,5,NORTH,WEST';
    const expected = null;
    const actual = PlaceCommand.tryParse(placeString);
    expect(actual).toEqual(expected);
  });
});
