// eslint-disable-next-line max-classes-per-file
const unit = 5;

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
    const facings = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    const index = facings.indexOf(facing);
    let nextIndex = index + (this.direction === 'RIGHT' ? 1 : -1);
    nextIndex = (nextIndex + facings.length) % facings.length;
    return [{ x, y, facing: facings[nextIndex] }, null];
  }
}

export class ReportCommand {
  static tryParse(commandString) {
    if (commandString !== 'REPORT') {
      return null;
    }
    return new ReportCommand(commandString);
  }

  execute({ x, y, facing }) {
    const result = `${x},${y},${facing}`;
    console.log(result);
    return [{ x, y, facing }, result];
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
    switch (facing) {
      case 'NORTH': {
        if (y < unit - 1) {
          y1 += 1;
        }
        break;
      }
      case 'EAST': {
        if (x < unit - 1) {
          x1 += 1;
        }
        break;
      }
      case 'WEST': {
        if (x > 0) {
          x1 -= 1;
        }
        break;
      }
      case 'SOUTH': {
        if (y > 0) {
          y1 -= 1;
        }
        break;
      }
      default:
    }

    return [{ x: x1, y: y1, facing }, null];
  }
}

export class PlaceCommand {
  constructor(commandString) {
    const [x, y, facing] = commandString.split(' ')[1].split(',');
    this.obj = {
      x: parseInt(x, 10),
      y: parseInt(y, 10),
      facing,
    };
  }

  static tryParse(commandString) {
    if (commandString.startsWith('PLACE')) {
      const [x, y, facing, shouldNotExist] = commandString
        .split(' ')[1]
        .split(',');
      const xInt = parseInt(x, 10);
      const yInt = parseInt(y, 10);
      if (
        Number.isInteger(xInt) &&
        Number.isInteger(yInt) &&
        xInt < unit &&
        xInt >= 0 &&
        yInt < unit &&
        yInt >= 0 &&
        shouldNotExist === undefined &&
        ['NORTH', 'WEST', 'EAST', 'SOUTH'].includes(facing)
      ) {
        return new PlaceCommand(commandString);
      }
    }
    return null;
  }

  execute() {
    return [this.obj, null];
  }
}
