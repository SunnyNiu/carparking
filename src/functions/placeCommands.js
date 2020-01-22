// eslint-disable-next-line max-classes-per-file
// import { directions } from './const';

export default class PlaceCommand {
  constructor(commandString) {
    const [x, y, facing] = commandString.split(' ')[1].split(',');
    this.obj = {
      x: parseInt(x, 10),
      y: parseInt(y, 10),
      facing,
    };
  }

  static tryparse(commandString) {
    let commandHalf = '';
    if (
      commandString.split(' ').length === 2 &&
      commandString.split(' ')[1].split(',').length === 3
    ) {
      commandHalf = commandString.split(' ')[1].split(',');
    }
    if (
      commandString.startsWith('PLACE') &&
      commandString.split(' ').length === 2 &&
      commandHalf.length === 3 &&
      commandHalf[0] < 5 &&
      commandHalf[1] < 5 &&
      commandHalf[0] >= 0 &&
      commandHalf[1] >= 0 &&
      ['EAST', 'SOUTH', 'WEST', 'NORTH'].includes(commandHalf[2])
    ) {
      return new PlaceCommand(commandString);
    }
    return null;
  }

  execute(commandString) {
    const commandHalf = commandString.split(' ')[1].split(',');
    return [
      { x: commandHalf[0], y: commandHalf[1], facing: commandHalf[2] },
      null,
    ];
  }
}
