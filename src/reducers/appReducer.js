/* eslint-disable no-case-declarations */
import PlaceCommand from '../functions/placeCommand';
import MoveCommand from '../functions/moveCommand';
import TurnCommand from '../functions/turnCommand';
import ReportCommand from '../functions/reportCommand';

const initialState = {
  location: {
    x: 0,
    y: 1,
    facing: 'NORTH',
  },
  output: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      const validCommands = [
        PlaceCommand,
        MoveCommand,
        TurnCommand,
        ReportCommand,
      ];
      let output = null;
      const location = action.commands
        .flatMap(str => validCommands.map(c => c.tryParse(str)))
        .filter(x => x)
        .reduce((acc, command) => {
          const [obj, out] = command.executeCommand(acc);
          if (out !== null) {
            output = out;
          }
          return obj;
        }, state.location);
      return { ...state, location, output };
    default:
      return state;
  }
};
