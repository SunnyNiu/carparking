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
