const fs = require('fs');

fs.readFile('./src/functions/fs.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const commands = data.split('\n');
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    // Place command
    if (command.startsWith('PLACE')) {
      const seperateTwoParts = command.split(' ');
      let secondPart = [];
      if (seperateTwoParts.length > 1) {
        secondPart = seperateTwoParts[1].split(',');
      }

      const facings = ['SOUTH', 'NORTH', 'WEST', 'EAST'];
      if (
        secondPart.length === 3 &&
        secondPart[0] < 5 &&
        secondPart[0] >= 0 &&
        secondPart[1] < 5 &&
        secondPart[1] >= 0 &&
        facings.includes(secondPart[2])
      ) {
        console.log('It is Place command', command);
      }
    }
    // Move command
    if (command === 'MOVE') {
      console.log('It is Move command,', command);
    }
    // Turn command
    if (command === 'LEFT' || command === 'RIGHT') {
      console.log('It is Turn command,', command);
    }
    // Report command
    if (command === 'REPORT') {
      console.log('It is Report command,', command);
    }
  }
});
