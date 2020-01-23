import { updateCarPositionCreator } from './actions';

describe('action tests', () => {
  it('updateCarPositionCreator return commands', () => {
    const commands = ['PLACE 1,1,NORTH', 'MOVE'];
    const expected = {
      type: 'UPDATE_LOCATION',
      commands,
    };

    const actual = updateCarPositionCreator(commands);
    expect(actual).toEqual(expected);
  });
});
