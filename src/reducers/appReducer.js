/* eslint-disable no-case-declarations */
import PlaceCommand from '../functions/placeCommands';
import MoveCommand from '../functions/moveCommands';
import TurnCommand from '../functions/turnCommands';
import ReportCommand from '../functions/reportCommands';

const initialState = {
  location: {
    x: 0,
    y: 0,
    facing: 'NORTH',
  },
  output: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      const commands = [PlaceCommand, MoveCommand, TurnCommand, ReportCommand];
      let output = null;

      const location = action.commands
        .flatMap(str => commands.map(c => c.tryparse(str)))
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
