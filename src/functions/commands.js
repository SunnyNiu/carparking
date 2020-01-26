import PlaceCommand from './placeCommand';
import MoveCommand from './moveCommand';

const fs = require('fs');

fs.readFile('./src/functions/fs.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const commands = data.split('\n');
  let obj = {};
  const facings = ['SOUTH', 'EAST', 'NORTH', 'WEST'];
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    // Place command
    if (PlaceCommand.tryParse(command)) {
      const c = new PlaceCommand(command);
      obj = c.executeCommand()[0];
    }
    // Move command
    if (MoveCommand.tryParse(command)) {
      const c = new MoveCommand(command);
      obj = c.executeCommand(obj)[0];
    }
    // Turn command
    if (command === 'LEFT' || command === 'RIGHT') {
      console.log('It is Turn command,', command);
      const { length } = facings;
      const index = facings.indexOf(obj.facing);
      if (command === 'LEFT') {
        obj.facing = facings[(index + 1) % length];
      } else {
        obj.facing = facings[(index + length - 1) % length];
      }
      console.log('turn command,', obj);
    }
    // Report command
    if (command === 'REPORT') {
      console.log('It is Report command,', command);
      console.log('obj', obj);
    }
  }
});
