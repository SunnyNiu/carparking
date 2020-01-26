export default class MoveCommand {
  static tryParse(command) {
    if (command === 'MOVE') {
      return new MoveCommand();
    }
    return null;
  }

  executeCommand(obj) {
    let { x, y, facing } = obj;
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    switch (facing) {
      case 'EAST':
        if (x < 4) {
          x += 1;
        }
        break;
      case 'SOUTH':
        if (y > 0) {
          y -= 1;
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
      default:
        break;
    }
    return [{ x, y, facing }, null];
  }
}
