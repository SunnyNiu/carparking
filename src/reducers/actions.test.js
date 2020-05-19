import { updateCarLocation, actionTypes } from './actions';

describe('updateCarLocation', () => {
  it('updateCarLocation works correctly', () => {
    const location = { x: 0, y: 1, facing: 'NORTH' };
    const output = null;
    const expected = {
      type: actionTypes.UPDATE_LOCATION,
      location,
      output,
    };

    const actual = updateCarLocation(location, output);
    expect(actual).toEqual(expected);
  });
});
