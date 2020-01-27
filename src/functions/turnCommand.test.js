import TurnCommand from './turnCommand';

describe('Report command', () => {
  it('Could verify it is turn left command', () => {
    const expected = new TurnCommand('LEFT');
    const actual = TurnCommand.tryParse('LEFT');
    expect(actual).toEqual(expected);
  });

  it('Could verify it is turn right command', () => {
    const expected = new TurnCommand('RIGHT');
    const actual = TurnCommand.tryParse('RIGHT');
    expect(actual).toEqual(expected);
  });

  it('Could verify it is not turn left/right command', () => {
    const expected = null;
    const actual = TurnCommand.tryParse('FORWARD');
    expect(actual).toEqual(expected);
  });

  it('Could verify it is not turn left/right command', () => {
    const expected = null;
    const actual = TurnCommand.tryParse('FORWARD');
    expect(actual).toEqual(expected);
  });

  it('Car turn from North to East when turning right', () => {
    const location = { x: 1, y: 1, facing: 'NORTH' };
    const expected = [{ x: 1, y: 1, facing: 'EAST' }, null];
    const c = new TurnCommand('RIGHT');
    const actual = c.executeCommand(location);
    expect(actual).toEqual(expected);
  });

  it('Car turn from East to South when turning right', () => {
    const location = { x: 1, y: 1, facing: 'EAST' };
    const expected = [{ x: 1, y: 1, facing: 'SOUTH' }, null];
    const c = new TurnCommand('RIGHT');
    const actual = c.executeCommand(location);
    expect(actual).toEqual(expected);
  });

  it('Car turn from South to West when turning right', () => {
    const location = { x: 1, y: 1, facing: 'SOUTH' };
    const expected = [{ x: 1, y: 1, facing: 'WEST' }, null];
    const c = new TurnCommand('RIGHT');
    const actual = c.executeCommand(location);
    expect(actual).toEqual(expected);
  });

  it('Car turn from West to North when turning right', () => {
    const location = { x: 1, y: 1, facing: 'WEST' };
    const expected = [{ x: 1, y: 1, facing: 'NORTH' }, null];
    const c = new TurnCommand('RIGHT');
    const actual = c.executeCommand(location);
    expect(actual).toEqual(expected);
  });

  it('Car turn from West to South when turning left', () => {
    const location = { x: 1, y: 1, facing: 'WEST' };
    const expected = [{ x: 1, y: 1, facing: 'SOUTH' }, null];
    const c = new TurnCommand('LEFT');
    const actual = c.executeCommand(location);
    expect(actual).toEqual(expected);
  });

  it('Car turn from South to East when turning left', () => {
    const location = { x: 1, y: 1, facing: 'SOUTH' };
    const expected = [{ x: 1, y: 1, facing: 'EAST' }, null];
    const c = new TurnCommand('LEFT');
    const actual = c.executeCommand(location);
    expect(actual).toEqual(expected);
  });

  it('Car turn from East to North when turning left', () => {
    const location = { x: 1, y: 1, facing: 'EAST' };
    const expected = [{ x: 1, y: 1, facing: 'NORTH' }, null];
    const c = new TurnCommand('LEFT');
    const actual = c.executeCommand(location);
    expect(actual).toEqual(expected);
  });

  it('Car turn from North to West when turning left', () => {
    const location = { x: 1, y: 1, facing: 'NORTH' };
    const expected = [{ x: 1, y: 1, facing: 'WEST' }, null];
    const c = new TurnCommand('LEFT');
    const actual = c.executeCommand(location);
    expect(actual).toEqual(expected);
  });
});
