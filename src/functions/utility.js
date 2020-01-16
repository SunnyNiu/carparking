const fs = require('fs')
fs.readFile('./fs.txt', 'utf8', (err, data) => {
  if (err) throw err
  const array = data.split('\n')

  for (let i = 0; i < array.length; i++) {
    let halfPart = []
    if (array[i].includes('PLACE') && array[i].split(' ').indexOf('PLACE') === 0) {
      halfPart = array[i].split(' ')[1].split(',')

      if (Number.isInteger(halfPart[0]) &&
        Number.isInteger(halfPart[1]) &&
        halfPart.length === 3 &&
        halfPart[1] < 5 &&
        halfPart[0] < 5 &&
        (halfPart[2] === 'NORTH' ||
          halfPart[2] === 'WEST' ||
          halfPart[2] === 'EAST' ||
          halfPart[2] === 'SOUTH')
      ) {
        // validPlace = array[i]
      }
    }

    let obj = {
      x: parseInt(halfPart[0]),
      y: parseInt(halfPart[1]),
      facing: parseInt(halfPart[2])
    }

    if (array[i] === 'MOVE') {
      obj = movePosition(obj)
      console.log('move position', obj)
      continue
    }

    if (array[i] === 'LEFT') {
      obj = turnLeft(obj, obj.facing)
      console.log('left face:', obj)
      continue
    }

    if (array[i] === 'RIGHT') {
      obj = turnRight(obj, obj.facing)
      console.log('right face:', obj)
      continue
    }

    if (array[i] === 'REPORT') {
      console.log('REPORT', obj)
      continue
    }
  }
})

// check if a command string is a PLACE command
export function isPlaceCommand (place) {
  if (place.startsWith('PLACE')) {
    const [x, y, facing, shouldNotExist] = place.split(' ')[1].split(',')
    const xInt = parseInt(x, 10)
    const yInt = parseInt(y, 10)
    if (Number.isInteger(xInt) && Number.isInteger(yInt) &&
      xInt < 5 && yInt < 5 && shouldNotExist === undefined &&
      ['NORTH', 'WEST', 'EAST', 'SOUTH'].includes(facing)
    ) {
      return true
    }
  }
  return false
}

function turnLeft (obj, face) {
  if (face === 'NORTH') {
    obj.facing = 'WEST'
  } else if (face === 'WEST') {
    obj.facing = 'SOUTH'
  } else if (face === 'SOUTH') {
    obj.facing = 'EAST'
  } else if (face === 'EAST') {
    obj.facing = 'NORTH'
  }
  return obj
}

function turnRight (obj, face) {
  if (face === 'NORTH') {
    obj.facing = 'EAST'
  } else if (face === 'EAST') {
    obj.facing = 'SOUTH'
  } else if (face === 'SOUTH') {
    obj.facing = 'WEST'
  } else if (face === 'WEST') {
    obj.facing = 'NORTH'
  }
  return obj
}

function movePosition (obj) {
  if (obj.facing === 'NORTH') {
    if (obj.y < 4) {
      obj.y = oby.y + 1
    }
  } else if (obj.facing === 'EAST') {
    if (obj.x < 4) {
      obj.x = obj.x + 1
    }
  } else if (obj.facing === 'WEST') {
    if (obj.x > 0) {
      obj.x = obj.x - 1
    }
  } else if (obj.facing === 'SOUTH') {
    if (obj.y > 0) {
      obj.y = oby.y - 1
    }
  }

  return obj
}
