export default class MoveCommand {
  static tryparse(commandString) {
    if (commandString === 'MOVE') {
      return new MoveCommand();
    }
    return null;
  }

  execute(obj) {
    let { x, y, facing } = obj;
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    switch (facing) {
      case 'EAST':
        if (x < 4) {
          x += 1;
        }
        break;
      case 'WEST':
        if (x > 0) {
          x -= 1;
        }
        break;
      case 'NORTH':
        if (y < 4) {
          y += 1;
        }
        break;
      case 'SOUTH':
        if (y > 0) {
          y -= 1;
        }
        break;
      default:
    }

    return [{ x, y, facing }, null];
  }
}
