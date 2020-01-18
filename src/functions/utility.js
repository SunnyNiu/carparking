import {
  TurnCommand,
  ReportCommand,
  MoveCommand,
  PlaceCommand,
} from './commands';

const fs = require('fs');

fs.readFile('src/functions/fs.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const array = data.split('\n');

  let obj = {};

  for (let i = 0; i < array.length; i++) {
    if (PlaceCommand.tryParse(array[i])) {
      const command = new PlaceCommand(array[i]);
      obj = command.execute(array[i]);
    }

    if (TurnCommand.tryParse(array[i])) {
      const command = new TurnCommand(array[i]);
      obj = command.execute(obj);
    }

    if (MoveCommand.tryParse(array[i])) {
      const command = new MoveCommand();
      obj = command.execute(obj);
    }

    if (ReportCommand.tryParse(array[i])) {
      const command = new ReportCommand();
      obj = command.execute(obj);
      const output = `${obj.x},${obj.y},${obj.facing}`;

      fs.writeFile('./output.text', output, 'utf8', error => {
        if (error) throw error;
        console.log('Output has been saved!');
      });
    }
  }
});
