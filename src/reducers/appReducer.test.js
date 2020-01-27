import appReducer from './appReducer';
import { updateCarLocationCreator } from './actions';

describe('appReducer', () => {
  it('car should be located in correct location when execute commands', () => {
    const action = updateCarLocationCreator([
      'PLACE 1,1,WEST',
      'MOVE',
      'REPORT',
    ]);
    const state = {
      location: { x: 1, y: 2, facing: 'EAST' },
      output: '',
    };

    const expected = {
      location: { x: 0, y: 1, facing: 'WEST' },
      output: '0,1,WEST',
    };

    const actual = appReducer(state, action);
    expect(actual).toEqual(expected);
  });
});
