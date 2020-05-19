export const actionTypes = {
  UPDATE_LOCATION: 'UPDATE_LOCATION',
};

export const updateCarLocation = (location, output) => {
  return {
    type: actionTypes.UPDATE_LOCATION,
    location,
    output,
  };
};
