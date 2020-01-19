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

  const initialLocation = {};

  const commands = [PlaceCommand, TurnCommand, MoveCommand, ReportCommand];

  array
    .flatMap(str => commands.map(cmd => cmd.tryParse(str)))
    .filter(x => x)
    .reduce(
      (acc, currentCommand) => currentCommand.execute(acc),
      initialLocation
    );
});
