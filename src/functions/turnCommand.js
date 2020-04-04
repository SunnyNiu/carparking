import { facings } from './const';

export default class TurnCommand {
  constructor(direction) {
    this.direction = direction;
  }

  static tryParse(command) {
    if (command === 'LEFT' || command === 'RIGHT') {
      return new TurnCommand(command);
    }
    return null;
  }

  executeCommand(obj) {
    const { length } = facings;
    let { facing } = obj;
    const { x, y } = obj;
    const index = facings.indexOf(facing);
    if (this.direction === 'LEFT') {
      facing = facings[(index + 1) % length];
    } else {
      facing = facings[(index + length - 1) % length];
    }
    return [{ x, y, facing }, null];
  }
}
