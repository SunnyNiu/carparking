import appReducer from './appReducer';
import { updateCarLocation } from './actions';
import { startCommandSequence, finishCommandSequence } from '../sagas/actions';

describe('appReducer', () => {
  it('car should be located in correct location when execute commands', () => {
    const action = updateCarLocation({ x: 1, y: 2, facing: 'EAST' }, null);
    const state = {
      location: null,
      output: '',
    };

    const expected = {
      location: { x: 1, y: 2, facing: 'EAST' },
      output: null,
    };

    const actual = appReducer(state, action);
    expect(actual).toEqual(expected);
  });

  it('handles startCommandSequence action correctly ', () => {
    const action = startCommandSequence(['']);
    const state = { isRunning: false, output: ['1,2,WEST'] };
    const expected = { isRunning: true, output: [] };
    const actual = appReducer(state, action);
    expect(actual).toEqual(expected);
  });

  it('handles finishCommandSequence action correctly ', () => {
    const action = finishCommandSequence();
    const state = { isRunning: true, output: ['1,2,WEST'] };
    const expected = { isRunning: false, output: ['1,2,WEST'] };
    const actual = appReducer(state, action);
    expect(actual).toEqual(expected);
  });
});
