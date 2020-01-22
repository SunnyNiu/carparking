import PlaceCommand from './placeCommands';

describe('place command', () => {
  it('run place command with PLACE as start, and correct location format, valid face', () => {
    const commandString = 'PLACE 1,1,NORTH';
    const expected = new PlaceCommand(commandString);
    const actual = PlaceCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('run place command without PLACE as start, it will return null', () => {
    const commandString = 'M PLACE 1,1,NORTH';
    const expected = null;
    const actual = PlaceCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('run place command with PLACE as start, but with number > 4 as x position, it will return null', () => {
    const commandString = 'PLACE 5,1,NORTH';
    const expected = null;
    const actual = PlaceCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('run place command with PLACE as start, but with number < 0 as x position, it will return null', () => {
    const commandString = 'PLACE -1,1,NORTH';
    const expected = null;
    const actual = PlaceCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('run place command with PLACE as start, but with string as x position, it will return null', () => {
    const commandString = 'PLACE s,1,NORTH';
    const expected = null;
    const actual = PlaceCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('run place command with PLACE as start, but with number > 4 as y position, it will return null', () => {
    const commandString = 'PLACE 1,5,NORTH';
    const expected = null;
    const actual = PlaceCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('run place command with PLACE as start, but with number < 0 as y position, it will return null', () => {
    const commandString = 'PLACE 1,-1,NORTH';
    const expected = null;
    const actual = PlaceCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('run place command with PLACE as start, but with string as y position, it will return null', () => {
    const commandString = 'PLACE 1,x,NORTH';
    const expected = null;
    const actual = PlaceCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('run place command with PLACE as start, but with invalid facing, it will return null', () => {
    const commandString = 'PLACE 1,1,NTORTH';
    const expected = null;
    const actual = PlaceCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('run place command, it will return place position and facing', () => {
    const commandString = 'PLACE 1,1,NORTH';
    const expected = [{ x: 1, y: 1, facing: 'NORTH' }, null];

    const command = new PlaceCommand(commandString);
    const actual = command.execute(commandString);
    expect(actual).toEqual(expected);
  });
});
