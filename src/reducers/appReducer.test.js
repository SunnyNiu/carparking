import appReducer from './appReducer';
import { updateCarPositionCreator } from './actions';

describe('appReducer', () => {
  it('handle updateCarPositionCreator action correctly', () => {
    const action = updateCarPositionCreator([
      'PLACE 1,1,EAST',
      'MOVE',
      'REPORT',
    ]);
    const state = {
      location: { x: 1, y: 1, facing: 'NORTH' },
      output: '',
    };

    const expected = {
      location: { facing: 'EAST', x: 2, y: 1 },
      output: '2,1,EAST',
    };
    const actual = appReducer(state, action);
    expect(actual).toEqual(expected);
  });
});
