const fs = require('fs');

fs.readFile('./src/functions/fs.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const commands = data.split('\n');
  const obj = {};
  const facings = ['SOUTH', 'EAST', 'NORTH', 'WEST'];
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    // Place command
    if (command.startsWith('PLACE')) {
      const separateTwoParts = command.split(' ');
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
        console.log('It is Place command', command);
        obj.x = parseInt(secondPart[0]);
        obj.y = parseInt(secondPart[1]);
        obj.facing = secondPart[2];
      }
      console.log('place command,', obj);
    }
    // Move command
    if (command === 'MOVE') {
      console.log('It is Move command,', command);
      switch (obj.facing) {
        case 'EAST':
          obj.x += 1;
          break;
        case 'SOUTH':
          obj.y -= 1;
          break;
        case 'WEST':
          obj.x -= 1;
          break;
        case 'NORTH':
          obj.y += 1;
          break;
        default:
          break;
      }
      console.log('move command,', obj);
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
