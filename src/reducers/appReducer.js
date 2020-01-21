const initialState = {
  location: {
    x: 0,
    y: 0,
    facing: 'NORTH',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
