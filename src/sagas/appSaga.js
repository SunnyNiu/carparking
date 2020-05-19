import { put, delay, takeEvery } from 'redux-saga/effects';
import PlaceCommand from '../functions/placeCommand';
import MoveCommand from '../functions/moveCommand';
import TurnCommand from '../functions/turnCommand';
import ReportCommand from '../functions/reportCommand';
import { updateCarLocation } from '../reducers/actions';
import { actionTypes, finishCommandSequence } from './actions';

const EXECUTION_DELAY = 1000;

export function* executeCommandSequenceSaga({ commands }) {
  let location = {};
  let output = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < commands.length; i++) {
    // yield console.log(commands[i], 'commands[i]:', i);
    const locationExist = Object.entries(location).length !== 0;
    if (commands[i].startsWith('PLACE')) {
      yield ([location, output] =
        PlaceCommand.tryParse(commands[i]) !== null
          ? PlaceCommand.tryParse(commands[i]).executeCommand()
          : [{}, '']);
    }
    if (commands[i] === 'MOVE') {
      yield ([location, output] =
        MoveCommand.tryParse(commands[i]) !== null && locationExist
          ? MoveCommand.tryParse(commands[i]).executeCommand(location)
          : [{}, '']);
    }

    if (commands[i] === 'LEFT' || commands[i] === 'RIGHT') {
      yield ([location, output] =
        TurnCommand.tryParse(commands[i]) !== null && locationExist
          ? TurnCommand.tryParse(commands[i]).executeCommand(location)
          : [{}, '']);
    }

    if (commands[i] === 'REPORT') {
      yield ([location, output] =
        ReportCommand.tryParse(commands[i]) !== null && locationExist
          ? ReportCommand.tryParse(commands[i]).executeCommand(location)
          : [{}, '']);
    }

    yield put(updateCarLocation(location, output));
    yield delay(EXECUTION_DELAY);
  }

  yield put(finishCommandSequence());
}

export default function*() {
  yield takeEvery(
    actionTypes.START_COMMAND_SEQUENCE,
    executeCommandSequenceSaga
  );
}
