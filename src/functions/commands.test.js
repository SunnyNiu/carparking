import {
  TurnCommand,
  ReportCommand,
  MoveCommand,
  PlaceCommand,
} from './commands';

describe('TurnCommand', () => {
  it('tryParse LEFT command', () => {
    const expected = new TurnCommand('LEFT');
    const actual = TurnCommand.tryParse('LEFT');
    expect(actual).toEqual(expected);
  });

  it('tryParse RIGHT command', () => {
    const expected = new TurnCommand('RIGHT');
    const actual = TurnCommand.tryParse('RIGHT');
    expect(actual).toEqual(expected);
  });

  it('tryParse wrong command will return null', () => {
    const expected = null;
    const actual = TurnCommand.tryParse('FORWARD');
    expect(actual).toEqual(expected);
  });

  it('LEFT command could turn facing to WEST when it was NORTH', () => {
    const command = new TurnCommand('LEFT');
    const expected = { x: 1, y: 1, facing: 'WEST' };
    const actual = command.execute({ x: 1, y: 1, facing: 'NORTH' });
    expect(actual).toEqual(expected);
  });

  it('LEFT command could turn facing to SOUTH when it was WEST', () => {
    const command = new TurnCommand('LEFT');
    const expected = { x: 1, y: 1, facing: 'SOUTH' };
    const actual = command.execute({ x: 1, y: 1, facing: 'WEST' });
    expect(actual).toEqual(expected);
  });

  it('LEFT command could turn facing to EAST when it was SOUTH', () => {
    const command = new TurnCommand('LEFT');
    const expected = { x: 1, y: 1, facing: 'EAST' };
    const actual = command.execute({ x: 1, y: 1, facing: 'SOUTH' });
    expect(actual).toEqual(expected);
  });

  it('LEFT command could turn facing to NORTH when it was EAST', () => {
    const command = new TurnCommand('LEFT');
    const expected = { x: 1, y: 1, facing: 'NORTH' };
    const actual = command.execute({ x: 1, y: 1, facing: 'EAST' });
    expect(actual).toEqual(expected);
  });

  it('RIGHT command could turn facing to EAST when it was NORTH', () => {
    const command = new TurnCommand('RIGHT');
    const expected = { x: 1, y: 1, facing: 'EAST' };
    const actual = command.execute({ x: 1, y: 1, facing: 'NORTH' });
    expect(actual).toEqual(expected);
  });

  it('RIGHT command could turn facing to SOUTH when it was EAST', () => {
    const command = new TurnCommand('RIGHT');
    const expected = { x: 1, y: 1, facing: 'SOUTH' };
    const actual = command.execute({ x: 1, y: 1, facing: 'EAST' });
    expect(actual).toEqual(expected);
  });

  it('RIGHT command could turn facing to WEST when it was SOUTH', () => {
    const command = new TurnCommand('RIGHT');
    const expected = { x: 1, y: 1, facing: 'WEST' };
    const actual = command.execute({ x: 1, y: 1, facing: 'SOUTH' });
    expect(actual).toEqual(expected);
  });

  it('RIGHT command could turn facing to NORTH when it was WEST', () => {
    const command = new TurnCommand('RIGHT');
    const expected = { x: 1, y: 1, facing: 'NORTH' };
    const actual = command.execute({ x: 1, y: 1, facing: 'WEST' });
    expect(actual).toEqual(expected);
  });
});

describe('ReportCommand', () => {
  it('tryParse REPORT command', () => {
    const expected = new ReportCommand('REPORT');
    const actual = ReportCommand.tryParse('REPORT');
    expect(actual).toEqual(expected);
  });

  it('tryParse will return null when using wrong command', () => {
    const expected = null;
    const actual = ReportCommand.tryParse('Report');
    expect(actual).toBe(expected);
  });

  it('REPORT command will return car location and its facing direction', () => {
    const expected = { x: 1, y: 1, facing: 'NORTH' };
    const command = new ReportCommand();
    const spy = jest.spyOn(global.console, 'log');
    const actual = command.execute({ x: 1, y: 1, facing: 'NORTH' });
    expect(spy).toBeCalledWith('1,1,NORTH');
    expect(actual).toEqual(expected);
  });
});

describe('MoveCommand', () => {
  it('tryParse MOVE command', () => {
    const expected = new MoveCommand('MOVE');
    const actual = MoveCommand.tryParse('MOVE');
    expect(actual).toEqual(expected);
  });

  it('tryParse will return null with wrong command', () => {
    const expected = null;
    const actual = MoveCommand.tryParse('DOWN');
    expect(actual).toEqual(expected);
  });

  it('MOVE command will execute and the new position is 1,2 when it was at 1,1,NORTH', () => {
    const expected = { x: 1, y: 2, facing: 'NORTH' };
    const command = new MoveCommand();
    const actual = command.execute({ x: 1, y: 1, facing: 'NORTH' });
    expect(actual).toEqual(expected);
  });

  it('MOVE command will execute and the new position is 1,0 when it was at 1,1,SOUTH', () => {
    const expected = { x: 1, y: 0, facing: 'SOUTH' };
    const command = new MoveCommand();
    const actual = command.execute({ x: 1, y: 1, facing: 'SOUTH' });
    expect(actual).toEqual(expected);
  });

  it('MOVE command will execute and the new position is 2,1 when it was at 1,1,EAST', () => {
    const expected = { x: 2, y: 1, facing: 'EAST' };
    const command = new MoveCommand();
    const actual = command.execute({ x: 1, y: 1, facing: 'EAST' });
    expect(actual).toEqual(expected);
  });

  it('MOVE command will execute and the new position is 0,1 when it was at 1,1,WEST', () => {
    const expected = { x: 0, y: 1, facing: 'WEST' };
    const command = new MoveCommand();
    const actual = command.execute({ x: 1, y: 1, facing: 'WEST' });
    expect(actual).toEqual(expected);
  });

  it('MOVE command will not execute when it was at 0,0,WEST', () => {
    const expected = { x: 0, y: 0, facing: 'WEST' };
    const command = new MoveCommand();
    const actual = command.execute({ x: 0, y: 0, facing: 'WEST' });
    expect(actual).toEqual(expected);
  });

  it('MOVE command will not execute when it was at 0,0,SOUTH', () => {
    const expected = { x: 0, y: 0, facing: 'SOUTH' };
    const command = new MoveCommand();
    const actual = command.execute({ x: 0, y: 0, facing: 'SOUTH' });
    expect(actual).toEqual(expected);
  });

  it('MOVE command will not execute when it was at 5,5,EAST', () => {
    const expected = { x: 5, y: 5, facing: 'EAST' };
    const command = new MoveCommand();
    const actual = command.execute({ x: 5, y: 5, facing: 'EAST' });
    expect(actual).toEqual(expected);
  });

  it('MOVE command will not execute when it was at 5,5,NORTH', () => {
    const expected = { x: 5, y: 5, facing: 'NORTH' };
    const command = new MoveCommand();
    const actual = command.execute({ x: 5, y: 5, facing: 'NORTH' });
    expect(actual).toEqual(expected);
  });
});

describe('PlaceCommand', () => {
  it('tryParse PLACE command', () => {
    const expected = new PlaceCommand('PLACE 1,1,NORTH');
    const actual = PlaceCommand.tryParse('PLACE 1,1,NORTH');
    expect(actual).toEqual(expected);
  });

  it('tryParse PLACE command without start with PLACE', () => {
    const expected = null;
    const actual = PlaceCommand.tryParse('M PLACE 1,1,NORTH');
    expect(actual).toBe(expected);
  });

  it('tryParse PLACE command with position which type of x is string instead of number', () => {
    const expected = null;
    const actual = PlaceCommand.tryParse('PLACE s,1,NORTH');
    expect(actual).toBe(expected);
  });

  it('tryParse PLACE command with position which type of y is string instead of number', () => {
    const expected = null;
    const actual = PlaceCommand.tryParse('PLACE 1,x,NORTH');
    expect(actual).toBe(expected);
  });

  it('tryParse PLACE command with position with no-exist facing', () => {
    const expected = null;
    const actual = PlaceCommand.tryParse('PLACE 1,1,FOR');
    expect(actual).toBe(expected);
  });

  it('tryParse PLACE command with position with position x > 5 ', () => {
    const expected = null;
    const actual = PlaceCommand.tryParse('PLACE 1,6,NORTH');
    expect(actual).toBe(expected);
  });

  it('tryParse PLACE command with position with position x < 0 ', () => {
    const expected = null;
    const actual = PlaceCommand.tryParse('PLACE -3,1,NORTH');
    expect(actual).toBe(expected);
  });

  it('tryParse PLACE command with position with position y > 5 ', () => {
    const expected = null;
    const actual = PlaceCommand.tryParse('PLACE 1,6,NORTH');
    expect(actual).toBe(expected);
  });

  it('tryParse PLACE command with position with position y < 0 ', () => {
    const expected = null;
    const actual = PlaceCommand.tryParse('PLACE 1,-2,NORTH');
    expect(actual).toBe(expected);
  });

  it('tryParse PLACE command with position with unneeded string after facing ', () => {
    const expected = null;
    const actual = PlaceCommand.tryParse('PLACE 1,1,NORTH,WEST');
    expect(actual).toBe(expected);
  });
});
