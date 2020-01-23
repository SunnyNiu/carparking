import { facings } from './const';

export default class TurnCommand {
  constructor(direction) {
    this.direction = direction;
  }

  static tryparse(commandString) {
    if (commandString === 'LEFT' || commandString === 'RIGHT') {
      return new TurnCommand(commandString);
    }
    return null;
  }

  execute({ x, y, facing }) {
    let index = 0;
    if (this.direction === 'LEFT') {
      index = (facings.indexOf(facing) - 1 + facings.length) % facings.length;
    } else {
      index = (facings.indexOf(facing) + 1 + facings.length) % facings.length;
    }

    return [{ x, y, facing: facings[index] }, null];
  }
}
