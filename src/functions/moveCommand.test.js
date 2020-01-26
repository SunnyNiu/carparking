import MoveCommand from './moveCommand';

describe('Move command', () => {
  it('Could verify it is move command', () => {
    const expected = new MoveCommand();
    const actual = MoveCommand.tryParse('MOVE');
    expect(actual).toEqual(expected);
  });

  it('Could verify it is not move command', () => {
    const expected = null;
    const actual = MoveCommand.tryParse('MMOVE');
    expect(actual).toEqual(expected);
  });

  it('move car one unit when car is facing north', () => {
    const carLocation = { x: 0, y: 1, facing: 'NORTH' };
    const expected = [{ x: 0, y: 2, facing: 'NORTH' }, null];
    const command = new MoveCommand();
    const actual = command.executeCommand(carLocation);
    expect(actual).toEqual(expected);
  });

  it('move car one unit when car is facing east', () => {
    const carLocation = { x: 0, y: 1, facing: 'EAST' };
    const expected = [{ x: 1, y: 1, facing: 'EAST' }, null];
    const command = new MoveCommand();
    const actual = command.executeCommand(carLocation);
    expect(actual).toEqual(expected);
  });

  it('move car one unit when car is facing south', () => {
    const carLocation = { x: 1, y: 1, facing: 'SOUTH' };
    const expected = [{ x: 1, y: 0, facing: 'SOUTH' }, null];
    const command = new MoveCommand();
    const actual = command.executeCommand(carLocation);
    expect(actual).toEqual(expected);
  });

  it('move car one unit when car is facing west', () => {
    const carLocation = { x: 1, y: 1, facing: 'WEST' };
    const expected = [{ x: 0, y: 1, facing: 'WEST' }, null];
    const command = new MoveCommand();
    const actual = command.executeCommand(carLocation);
    expect(actual).toEqual(expected);
  });

  it('car will not move one unit when car is facing west and its x is less than or equal 0', () => {
    const carLocation = { x: 0, y: 1, facing: 'WEST' };
    const expected = [{ x: 0, y: 1, facing: 'WEST' }, null];
    const command = new MoveCommand();
    const actual = command.executeCommand(carLocation);
    expect(actual).toEqual(expected);
  });

  it('car will not move one unit when car is facing east and its x is greater than or equal 4', () => {
    const carLocation = { x: 4, y: 1, facing: 'EAST' };
    const expected = [{ x: 4, y: 1, facing: 'EAST' }, null];
    const command = new MoveCommand();
    const actual = command.executeCommand(carLocation);
    expect(actual).toEqual(expected);
  });

  it('car will not move one unit when car is facing north and its y is greater than or equal 4', () => {
    const carLocation = { x: 4, y: 4, facing: 'NORTH' };
    const expected = [{ x: 4, y: 4, facing: 'NORTH' }, null];
    const command = new MoveCommand();
    const actual = command.executeCommand(carLocation);
    expect(actual).toEqual(expected);
  });

  it('car will not move one unit when car is facing south and its y is greater than or equal 4', () => {
    const carLocation = { x: 4, y: 0, facing: 'SOUTH' };
    const expected = [{ x: 4, y: 0, facing: 'SOUTH' }, null];
    const command = new MoveCommand();
    const actual = command.executeCommand(carLocation);
    expect(actual).toEqual(expected);
  });
});
