import { facings } from './const';

export default class TurnCommand {
  constructor(obj) {
    this.obj = obj;
  }

  static tryparse(commandString, obj) {
    if (commandString === 'LEFT' || commandString === 'RIGHT') {
      return new TurnCommand(obj);
    }
    return null;
  }

  execute(commandString) {
    let index = 0;
    if (commandString === 'LEFT') {
      index =
        (facings.indexOf(this.obj.facing) - 1 + facings.length) %
        facings.length;
    } else {
      index =
        (facings.indexOf(this.obj.facing) + 1 + facings.length) %
        facings.length;
    }

    return [{ x: this.obj.x, y: this.obj.y, facing: facings[index] }, null];
  }
}
