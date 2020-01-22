import PlaceCommand from './placeCommands';
import MoveCommand from './moveCommands';
import TurnCommand from './turnCommands';

const fs = require('fs');

fs.readFile('./fs.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const array = data.split('\n');

  let car = [];

  for (let i = 0; i < array.length; i++) {
    // PlaceCommand
    if (PlaceCommand.tryparse(array[i])) {
      const command = new PlaceCommand(array[i]);
      car = command.execute(array[i]);
    }

    // MoveCommand
    if (MoveCommand.tryparse(array[i])) {
      const command = new MoveCommand(array[i]);
      car = command.execute(array[i]);
    }

    // TurnCommand
    if (TurnCommand.tryparse(array[i])) {
      const command = new TurnCommand(array[i], car[0]);
      car = command.execute(array[i]);
    }

    if (array[i] === 'REPORT') {
      console.log('report');
      console.log(car.obj);
    }
  }
});
