/* eslint-disable no-case-declarations */
import {
  TurnCommand,
  ReportCommand,
  MoveCommand,
  PlaceCommand,
} from '../functions/commands';

const initialState = {
  location: {
    x: 0,
    y: 0,
    facing: 'NORTH',
  },
  output: '',
};

const commands = [PlaceCommand, TurnCommand, MoveCommand, ReportCommand];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      let output = null;
      const location = action.commands
        .flatMap(str => commands.map(command => command.tryParse(str)))
        .filter(x => x)
        .reduce((acc, currentCommand) => {
          const [loc, out] = currentCommand.execute(acc);
          if (out !== null) {
            output = out;
          }
          return loc;
        }, state.location);
      return { ...state, location, output };

    default:
      return state;
  }
};
