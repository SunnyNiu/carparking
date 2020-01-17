import { TurnCommand } from './commands';

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

  it('RIGHT command will turn undefined facing when facing to no existing direction', () => {
    const command = new TurnCommand('RIGHT');
    const expected = { x: 1, y: 1, facing: undefined };
    const actual = command.execute({ x: 1, y: 1, facing: 'SKY' });
    expect(actual).toEqual(expected);
  });

  it('LEFT command will turn undefined facing when facing to no existing direction', () => {
    const command = new TurnCommand('LEFT');
    const expected = { x: 1, y: 1, facing: undefined };
    const actual = command.execute({ x: 1, y: 1, facing: 'SKY' });
    expect(actual).toEqual(expected);
  });
});
