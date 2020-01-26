import PlaceCommand from './placeCommand';
import MoveCommand from './moveCommand';
import TurnCommand from './turnCommand';
import ReportCommand from './reportCommand';

const fs = require('fs');

fs.readFile('./src/functions/fs.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const commands = data.split('\n');
  let obj = {};
  let result = '';
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    // Place command
    if (PlaceCommand.tryParse(command)) {
      const c = new PlaceCommand(command);
      [obj, result] = c.executeCommand();
    }
    // Move command
    if (MoveCommand.tryParse(command)) {
      const c = new MoveCommand(command);
      [obj, result] = c.executeCommand(obj);
    }
    // Turn command
    if (TurnCommand.tryParse(command)) {
      const c = new TurnCommand(command);
      [obj, result] = c.executeCommand(obj);
    }

    // Report command
    if (ReportCommand.tryParse(command)) {
      const c = new ReportCommand(command);
      [obj, result] = c.executeCommand(obj);
      console.log('report:', result);
    }
  }
});
