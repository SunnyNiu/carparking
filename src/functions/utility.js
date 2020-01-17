const fs = require('fs');

// check if a command string is a PLACE command
function isPlaceCommand(place) {
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

function isTurnCommand(command) {
  if (command === 'LEFT' || command === 'RIGHT') {
    return true;
  }
  return false;
}

function isMoveCommand(command) {
  if (command === 'MOVE') {
    return true;
  }
  return false;
}

function isReportCommand(command) {
  if (command === 'REPORT') {
    return true;
  }
  return false;
}

function turnDirection(direction, obj) {
  const { facing } = obj;
  if (direction === 'LEFT') {
    if (facing === 'NORTH') {
      obj.facing = 'WEST';
    } else if (facing === 'WEST') {
      obj.facing = 'SOUTH';
    } else if (facing === 'SOUTH') {
      obj.facing = 'EAST';
    } else if (facing === 'EAST') {
      obj.facing = 'NORTH';
    }
  } else if (direction === 'RIGHT') {
    if (facing === 'NORTH') {
      obj.facing = 'EAST';
    } else if (facing === 'EAST') {
      obj.facing = 'SOUTH';
    } else if (facing === 'SOUTH') {
      obj.facing = 'WEST';
    } else if (facing === 'WEST') {
      obj.facing = 'NORTH';
    }
  }

  return obj;
}

function movePosition(obj) {
  const { x, y, facing } = obj;
  if (facing === 'NORTH') {
    if (y < 4) {
      obj.y = y + 1;
    }
  } else if (facing === 'EAST') {
    if (x < 4) {
      obj.x = x + 1;
    }
  } else if (facing === 'WEST') {
    if (x > 0) {
      obj.x = x - 1;
    }
  } else if (facing === 'SOUTH') {
    if (y > 0) {
      obj.y = y - 1;
    }
  }

  return obj;
}
fs.readFile('./fs.txt', 'utf8', (err, data) => {
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
