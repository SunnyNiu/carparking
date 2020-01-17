import {
  isPlaceCommand,
  isTurnCommand,
  isMoveCommand,
  isReportCommand,
  turnDirection,
  movePosition,
} from './utility';

describe('isPlaceCommand function works', () => {
  it('placeCommand is true', () => {
    const expected = true;
    const actual = isPlaceCommand('PLACE 1,2,EAST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when without PLACE as starting', () => {
    const expected = false;
    const actual = isPlaceCommand('x PLACE 1,2,EAST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when position x is out of range', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE 6,2,EAST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when position y is out of range', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE 2,6,EAST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when position facing is out of range', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE 2,3,Ex');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when having extra character', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE 2,3,NORTH,WEST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when position x is not number', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE e,3,WEST');
    expect(actual).toBe(expected);
  });

  it('placeCommand is false when position y is not number', () => {
    const expected = false;
    const actual = isPlaceCommand('PLACE 3,x,EAST');
    expect(actual).toBe(expected);
  });

  it('turnCommand is false when turn is anything else value except LEFT, RIGHT', () => {
    const expected = false;
    const actual = isTurnCommand('FORWARD');
    expect(actual).toBe(expected);
  });

  it('turnCommand is true when turn is LEFT', () => {
    const expected = true;
    const actual = isTurnCommand('LEFT');
    expect(actual).toBe(expected);
  });

  it('turnCommand is true when turn is RIGHT', () => {
    const expected = true;
    const actual = isTurnCommand('RIGHT');
    expect(actual).toBe(expected);
  });

  it('moveCommand is true when it is MOVE', () => {
    const excepted = true;
    const actual = isMoveCommand('MOVE');
    expect(actual).toBe(excepted);
  });

  it('moveCommand is false when it is not MOVE', () => {
    const excepted = false;
    const actual = isMoveCommand('MOVED');
    expect(actual).toBe(excepted);
  });

  it('reportCommand is false when it is not REPORT', () => {
    const excepted = false;
    const actual = isReportCommand('REPORTS');
    expect(actual).toBe(excepted);
  });

  it('reportCommand is true when it is REPORT', () => {
    const excepted = true;
    const actual = isReportCommand('REPORT');
    expect(actual).toBe(excepted);
  });

  it('Car should be turn left to NORTH when it faced to EAST', () => {
    const obj = { x: 1, y: 1, facing: 'EAST' };
    const expected = 'NORTH';
    const actual = turnDirection('LEFT', obj).facing;
    expect(actual).toBe(expected);
  });

  it('Car should be turn left to WEST when it faced to NORTH', () => {
    const obj = { x: 1, y: 1, facing: 'NORTH' };
    const expected = 'WEST';
    const actual = turnDirection('LEFT', obj).facing;
    expect(actual).toBe(expected);
  });

  it('Car should be turn left to SOUTH when it faced to WEST', () => {
    const obj = { x: 1, y: 1, facing: 'WEST' };
    const expected = 'SOUTH';
    const actual = turnDirection('LEFT', obj).facing;
    expect(actual).toBe(expected);
  });

  it('Car should be turn left to EAST when it faced to SOUTH', () => {
    const obj = { x: 1, y: 1, facing: 'SOUTH' };
    const expected = 'EAST';
    const actual = turnDirection('LEFT', obj).facing;
    expect(actual).toBe(expected);
  });

  it('Car should be turn right to SOUTH when it faced to EAST', () => {
    const obj = { x: 1, y: 1, facing: 'EAST' };
    const expected = 'SOUTH';
    const actual = turnDirection('RIGHT', obj).facing;
    expect(actual).toBe(expected);
  });

  it('Car should be turn right to WEST when it faced to SOUTH', () => {
    const obj = { x: 1, y: 1, facing: 'SOUTH' };
    const expected = 'WEST';
    const actual = turnDirection('RIGHT', obj).facing;
    expect(actual).toBe(expected);
  });

  it('Car should be turn right to NORTH when it faced to WEST', () => {
    const obj = { x: 1, y: 1, facing: 'WEST' };
    const expected = 'NORTH';
    const actual = turnDirection('RIGHT', obj).facing;
    expect(actual).toBe(expected);
  });

  it('Car should be turn right to EAST when it faced to NORTH', () => {
    const obj = { x: 1, y: 1, facing: 'NORTH' };
    const expected = 'EAST';
    const actual = turnDirection('RIGHT', obj).facing;
    expect(actual).toBe(expected);
  });

  it('Car should be move to 2,1 when it was at 1,1 and facing to EAST', () => {
    const obj = { x: 1, y: 1, facing: 'EAST' };
    const expected = { x: 2, y: 1, facing: 'EAST' };
    const actual = movePosition(obj);
    expect(actual).toEqual(expected);
  });

  it('Car should be move to 1,0 when it was at 1,1 and facing to SOUTH', () => {
    const obj = { x: 1, y: 1, facing: 'SOUTH' };
    const expected = { x: 1, y: 0, facing: 'SOUTH' };
    const actual = movePosition(obj);
    expect(actual).toEqual(expected);
  });

  it('Car should be move to 1,2 when it was at 1,1 and facing to NORTH', () => {
    const obj = { x: 1, y: 1, facing: 'NORTH' };
    const expected = { x: 1, y: 2, facing: 'NORTH' };
    const actual = movePosition(obj);
    expect(actual).toEqual(expected);
  });

  it('Car should be move to 0,1 when it was at 1,1 and facing to WEST', () => {
    const obj = { x: 1, y: 1, facing: 'WEST' };
    const expected = { x: 0, y: 1, facing: 'WEST' };
    const actual = movePosition(obj);
    expect(actual).toEqual(expected);
  });

  it('Car should not be move when it was at 5,5 and facing to NORTH', () => {
    const obj = { x: 5, y: 5, facing: 'NORTH' };
    const actual = movePosition(obj);
    expect(actual).toEqual(obj);
  });

  it('Car should not be move when it was at 5,5 and facing to EAST', () => {
    const obj = { x: 5, y: 5, facing: 'EAST' };
    const actual = movePosition(obj);
    expect(actual).toEqual(obj);
  });

  it('Car should not be move when it was at 0,0 and facing to WEST', () => {
    const obj = { x: 0, y: 0, facing: 'WEST' };
    const actual = movePosition(obj);
    expect(actual).toEqual(obj);
  });

  it('Car should not be move when it was at 0,0 and facing to SOUTH', () => {
    const obj = { x: 0, y: 0, facing: 'SOUTH' };
    const actual = movePosition(obj);
    expect(actual).toEqual(obj);
  });
});
