import { updateCarLocationCreator } from './actions';

describe('updateCarLocationCreator', () => {
  it('updateCarLocationCreator works correctly', () => {
    const commands = ['PLACE 1,1,NORTH', 'MOVE', 'REPORT'];
    const expected = {
      type: 'UPDATE_LOCATION',
      commands,
    };

    const actual = updateCarLocationCreator(commands);
    expect(actual).toEqual(expected);
  });
});
