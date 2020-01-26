import { facings } from './const';

export default class PlaceCommand {
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
      const separateTwoParts = commandString.split(' ');
      let secondPart = [];
      if (separateTwoParts.length > 1) {
        secondPart = separateTwoParts[1].split(',');
      }
      if (
        secondPart.length === 3 &&
        secondPart[0] < 5 &&
        secondPart[0] >= 0 &&
        secondPart[1] < 5 &&
        secondPart[1] >= 0 &&
        facings.includes(secondPart[2])
      ) {
        return new PlaceCommand(commandString);
      }
      return null;
    }
  }

  executeCommand() {
    return [this.obj, null];
  }
}
