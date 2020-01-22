/* eslint-disable no-case-declarations */
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
      return { ...state, location: action.location, output: action.output };
    default:
      return state;
  }
};
