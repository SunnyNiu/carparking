import PlaceCommand from './placeCommand';
import MoveCommand from './moveCommand';
import TurnCommand from './turnCommand';
import ReportCommand from './reportCommand';

const fs = require('fs');

fs.readFile('./src/functions/fs.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const commands = data.split('\n');
  const validCommands = [PlaceCommand, MoveCommand, TurnCommand, ReportCommand];
  const location = { x: 1, y: 1, facing: 'NORTH' };
  let out = '';
  const result = commands
    .flatMap(str => validCommands.map(c => c.tryParse(str)))
    .filter(x => x)
    .reduce((acc, command) => {
      const [obj, output] = command.executeCommand(acc);
      if (output !== null) {
        out = output;
      }
      return obj;
    }, location);
  console.log('row 19,', result);
});
