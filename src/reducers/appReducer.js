/* eslint-disable no-case-declarations */

import { actionTypes as sagaActionTypes } from '../sagas/actions';
import { actionTypes } from './actions';

const initialState = {
  location: {},
  output: '',
  isRunning: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOCATION:
      const { location, output } = action;
      const report =
        output === ''
          ? 'please input location and facing with format like: PLACE 0,2,EAST'
          : output;
      return { ...state, location, output: report };
    case sagaActionTypes.START_COMMAND_SEQUENCE:
      return { ...state, isRunning: true, output: [] };
    case sagaActionTypes.FINISH_COMMAND_SEQUENCE:
      return { ...state, isRunning: false };
    default:
      return state;
  }
};
