import {
  actionTypes,
  startCommandSequence,
  finishCommandSequence,
} from './actions';

describe('sagas Actions', () => {
  it('startCommandSequence works correctly', () => {
    const commands = [];
    const expected = {
      type: actionTypes.START_COMMAND_SEQUENCE,
      commands,
    };

    const actual = startCommandSequence(commands);
    expect(actual).toEqual(expected);
  });

  it('finishCommandSequence works correctly', () => {
    const expected = {
      type: actionTypes.FINISH_COMMAND_SEQUENCE,
    };

    const actual = finishCommandSequence();
    expect(actual).toEqual(expected);
  });
});
