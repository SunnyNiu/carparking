export const updateCarPositionCreator = car => {
  return {
    type: 'UPDATE_LOCATION',
    location: car[0],
    output: car[1],
  };
};
