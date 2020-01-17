const fs = require('fs');

// check if a command string is a PLACE command
export function isPlaceCommand(place) {
  if (place.startsWith('PLACE')) {
    const [x, y, facing, shouldNotExist] = place.split(' ')[1].split(',');
    const xInt = parseInt(x, 10);
    const yInt = parseInt(y, 10);
    if (
      Number.isInteger(xInt) &&
      Number.isInteger(yInt) &&
      xInt < 5 &&
      yInt < 5 &&
      shouldNotExist === undefined &&
      ['NORTH', 'WEST', 'EAST', 'SOUTH'].includes(facing)
    ) {
      return true;
    }
  }
  return false;
}

export function isTurnCommand(command) {
  return command === 'LEFT' || command === 'RIGHT';
}

export function isMoveCommand(command) {
  return command === 'MOVE';
}

export function isReportCommand(command) {
  return command === 'REPORT';
}

fs.readFile('src/functions/fs.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const array = data.split('\n');

  let obj = {};

  for (let i = 0; i < array.length; i++) {
    if (
      array[i].includes('PLACE') &&
      array[i].split(' ').indexOf('PLACE') === 0
    ) {
      if (isPlaceCommand(array[i])) {
        const [x, y, facing] = array[i].split(' ')[1].split(',');

        obj = {
          x: parseInt(x, 10),
          y: parseInt(y, 10),
          facing,
        };
      }
    }

    if (isTurnCommand(array[i])) {
      obj = movePosition(obj);
    }

    if (isMoveCommand(array[i])) {
      obj = turnDirection(array[i], obj);
    }

    if (isReportCommand(array[i])) {
      const output = `position is [${obj.x},${obj.y}] and car is facing ${obj.facing}`;
      fs.writeFile('./output.text', output, 'utf8', error => {
        if (error) throw error;
        console.log('Output has been saved!');
      });
    }
  }
});
