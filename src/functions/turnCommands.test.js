import TurnCommand from './turnCommands';

describe('turn command', () => {
  it('verify turn left command when facing NORTH', () => {
    const commandString = 'LEFT';
    const obj = { x: 1, y: 1, facing: 'NORTH' };
    const expected = new TurnCommand(obj);
    const actual = TurnCommand.tryparse(commandString, obj);
    expect(actual).toEqual(expected);
  });

  it('verify turn left command when facing EAST', () => {
    const commandString = 'LEFT';
    const obj = { x: 1, y: 1, facing: 'EAST' };
    const expected = new TurnCommand(obj);
    const actual = TurnCommand.tryparse(commandString, obj);
    expect(actual).toEqual(expected);
  });

  it('verify turn left command when facing SOUTH', () => {
    const commandString = 'LEFT';
    const obj = { x: 1, y: 1, facing: 'SOUTH' };
    const expected = new TurnCommand(obj);
    const actual = TurnCommand.tryparse(commandString, obj);
    expect(actual).toEqual(expected);
  });

  it('verify turn left command when facing WEST', () => {
    const commandString = 'LEFT';
    const obj = { x: 1, y: 1, facing: 'WEST' };
    const expected = new TurnCommand(obj);
    const actual = TurnCommand.tryparse(commandString, obj);
    expect(actual).toEqual(expected);
  });

  it('verify turn right command when facing NORTH', () => {
    const commandString = 'RIGHT';
    const obj = { x: 1, y: 1, facing: 'NORTH' };
    const expected = new TurnCommand(obj);
    const actual = TurnCommand.tryparse(commandString, obj);
    expect(actual).toEqual(expected);
  });

  it('verify turn right command when facing EAST', () => {
    const commandString = 'RIGHT';
    const obj = { x: 1, y: 1, facing: 'EAST' };
    const expected = new TurnCommand(obj);
    const actual = TurnCommand.tryparse(commandString, obj);
    expect(actual).toEqual(expected);
  });

  it('verify turn right command when facing SOUTH', () => {
    const commandString = 'RIGHT';
    const obj = { x: 1, y: 1, facing: 'SOUTH' };
    const expected = new TurnCommand(obj);
    const actual = TurnCommand.tryparse(commandString, obj);
    expect(actual).toEqual(expected);
  });

  it('verify turn right command when facing WEST', () => {
    const commandString = 'RIGHT';
    const obj = { x: 1, y: 1, facing: 'WEST' };
    const expected = new TurnCommand(obj);
    const actual = TurnCommand.tryparse(commandString, obj);
    expect(actual).toEqual(expected);
  });

  it('verify it is null with invalid turn command', () => {
    const commandString = 'RIGHTS';
    const obj = { x: 1, y: 1, facing: 'WEST' };
    const expected = null;
    const actual = TurnCommand.tryparse(commandString, obj);
    expect(actual).toEqual(expected);
  });

  it('run turn right command when facing WEST, it will change facing to NORTH', () => {
    const commandString = 'RIGHT';
    const obj = { x: 1, y: 1, facing: 'WEST' };
    const command = new TurnCommand(obj);
    const actual = command.execute(commandString);
    const expected = [{ x: 1, y: 1, facing: 'NORTH' }, null];
    expect(actual).toEqual(expected);
  });

  it('run turn right command when facing NORTH, it will change facing to EAST', () => {
    const commandString = 'RIGHT';
    const obj = { x: 1, y: 1, facing: 'NORTH' };
    const command = new TurnCommand(obj);
    const actual = command.execute(commandString);
    const expected = [{ x: 1, y: 1, facing: 'EAST' }, null];
    expect(actual).toEqual(expected);
  });

  it('run turn right command when facing EAST, it will change facing to SOUTH', () => {
    const commandString = 'RIGHT';
    const obj = { x: 1, y: 1, facing: 'EAST' };
    const command = new TurnCommand(obj);
    const actual = command.execute(commandString);
    const expected = [{ x: 1, y: 1, facing: 'SOUTH' }, null];
    expect(actual).toEqual(expected);
  });

  it('run turn right command when facing SOUTH, it will change facing to WEST', () => {
    const commandString = 'RIGHT';
    const obj = { x: 1, y: 1, facing: 'SOUTH' };
    const command = new TurnCommand(obj);
    const actual = command.execute(commandString);
    const expected = [{ x: 1, y: 1, facing: 'WEST' }, null];
    expect(actual).toEqual(expected);
  });

  it('run turn left command when facing WEST, it will change facing to SOUTH', () => {
    const commandString = 'LEFT';
    const obj = { x: 1, y: 1, facing: 'WEST' };
    const command = new TurnCommand(obj);
    const actual = command.execute(commandString);
    const expected = [{ x: 1, y: 1, facing: 'SOUTH' }, null];
    expect(actual).toEqual(expected);
  });

  it('run turn left command when facing SOUTH, it will change facing to EAST', () => {
    const commandString = 'LEFT';
    const obj = { x: 1, y: 1, facing: 'SOUTH' };
    const command = new TurnCommand(obj);
    const actual = command.execute(commandString);
    const expected = [{ x: 1, y: 1, facing: 'EAST' }, null];
    expect(actual).toEqual(expected);
  });

  it('run turn left command when facing EAST, it will change facing to NORTH', () => {
    const commandString = 'LEFT';
    const obj = { x: 1, y: 1, facing: 'EAST' };
    const command = new TurnCommand(obj);
    const actual = command.execute(commandString);
    const expected = [{ x: 1, y: 1, facing: 'NORTH' }, null];
    expect(actual).toEqual(expected);
  });

  it('run turn left command when facing NORTH, it will change facing to WEST', () => {
    const commandString = 'LEFT';
    const obj = { x: 1, y: 1, facing: 'NORTH' };
    const command = new TurnCommand(obj);
    const actual = command.execute(commandString);
    const expected = [{ x: 1, y: 1, facing: 'WEST' }, null];
    expect(actual).toEqual(expected);
  });
});
