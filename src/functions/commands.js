// eslint-disable-next-line max-classes-per-file
export class TurnCommand {
  constructor(direction) {
    this.direction = direction;
  }

  static tryParse(commandString) {
    if (commandString !== 'LEFT' && commandString !== 'RIGHT') {
      return null;
    }
    return new TurnCommand(commandString);
  }

  execute({ x, y, facing }) {
    let updatedFacing;
    if (this.direction === 'LEFT') {
      if (facing === 'NORTH') {
        updatedFacing = 'WEST';
      } else if (facing === 'WEST') {
        updatedFacing = 'SOUTH';
      } else if (facing === 'SOUTH') {
        updatedFacing = 'EAST';
      } else if (facing === 'EAST') {
        updatedFacing = 'NORTH';
      }
    } else if (this.direction === 'RIGHT') {
      if (facing === 'NORTH') {
        updatedFacing = 'EAST';
      } else if (facing === 'EAST') {
        updatedFacing = 'SOUTH';
      } else if (facing === 'SOUTH') {
        updatedFacing = 'WEST';
      } else if (facing === 'WEST') {
        updatedFacing = 'NORTH';
      }
    }

    return { x, y, facing: updatedFacing };
  }
}

export class ReportCommand {
  constructor(report) {
    this.report = report;
  }

  static tryParse(commandString) {
    if (commandString !== 'REPORT') {
      return null;
    }
    return new ReportCommand(commandString);
  }

  execute({ x, y, facing }) {
    const result = `${x},${y},${facing}`;
    console.log(result);
    return { x, y, facing };
  }
}

export class MoveCommand {
  static tryParse(commandString) {
    if (commandString !== 'MOVE') {
      return null;
    }
    return new MoveCommand(commandString);
  }

  execute({ x, y, facing }) {
    let x1 = x;
    let y1 = y;
    if (facing === 'NORTH') {
      if (y < 4) {
        y1 += 1;
      }
    } else if (facing === 'EAST') {
      if (x < 4) {
        x1 += 1;
      }
    } else if (facing === 'WEST') {
      if (x > 0) {
        x1 -= 1;
      }
    } else if (facing === 'SOUTH') {
      if (y > 0) {
        y1 -= 1;
      }
    }

    return { x: x1, y: y1, facing };
  }
}
