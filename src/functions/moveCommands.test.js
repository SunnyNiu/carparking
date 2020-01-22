import MoveCommand from './moveCommands';

const commandString = 'MOVE';
const invalidMoveCommandString = 'MMOVE';

describe('move command', () => {
  it('run move command, verify it is move command', () => {
    const expected = new MoveCommand();
    const actual = MoveCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('run move command with invalid command, it will return null', () => {
    const expected = null;
    const actual = MoveCommand.tryparse(invalidMoveCommandString);
    expect(actual).toEqual(expected);
  });

  it('run move command when facing NORTH', () => {
    const obj = { x: 1, y: 1, facing: 'NORTH' };
    const expected = [{ x: 1, y: 2, facing: 'NORTH' }, null];
    const command = new MoveCommand(obj);
    const actual = command.execute(obj);
    expect(actual).toEqual(expected);
  });

  it('run move command when facing EAST', () => {
    const obj = { x: 1, y: 1, facing: 'EAST' };
    const expected = [{ x: 2, y: 1, facing: 'EAST' }, null];
    const command = new MoveCommand(obj);
    const actual = command.execute(obj);
    expect(actual).toEqual(expected);
  });

  it('run move command when facing SOUTH', () => {
    const obj = { x: 1, y: 1, facing: 'SOUTH' };
    const expected = [{ x: 1, y: 0, facing: 'SOUTH' }, null];
    const command = new MoveCommand(obj);
    const actual = command.execute(obj);
    expect(actual).toEqual(expected);
  });

  it('run move command when facing WEST', () => {
    const obj = { x: 1, y: 1, facing: 'WEST' };
    const expected = [{ x: 0, y: 1, facing: 'WEST' }, null];
    const command = new MoveCommand(obj);
    const actual = command.execute(obj);
    expect(actual).toEqual(expected);
  });

  it('run move command when facing NORTH, position is 4,4, it will not move car', () => {
    const obj = { x: 4, y: 4, facing: 'NORTH' };
    const expected = [{ x: 4, y: 4, facing: 'NORTH' }, null];
    const command = new MoveCommand(obj);
    const actual = command.execute(obj);
    expect(actual).toEqual(expected);
  });

  it('run move command when facing EAST, position is 4,4, it will not move car', () => {
    const obj = { x: 4, y: 4, facing: 'EAST' };
    const expected = [{ x: 4, y: 4, facing: 'EAST' }, null];
    const command = new MoveCommand(obj);
    const actual = command.execute(obj);
    expect(actual).toEqual(expected);
  });

  it('run move command when facing SOUTH, position is 0,0, it will not move car', () => {
    const obj = { x: 0, y: 0, facing: 'SOUTH' };
    const expected = [{ x: 0, y: 0, facing: 'SOUTH' }, null];
    const command = new MoveCommand(obj);
    const actual = command.execute(obj);
    expect(actual).toEqual(expected);
  });

  it('run move command when facing WEST, position is 0,0, it will not move car', () => {
    const obj = { x: 0, y: 0, facing: 'WEST' };
    const expected = [{ x: 0, y: 0, facing: 'WEST' }, null];
    const command = new MoveCommand(obj);
    const actual = command.execute(obj);
    expect(actual).toEqual(expected);
  });
});
