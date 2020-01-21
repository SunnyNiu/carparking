export function updateBus(commands) {
  return {
    type: 'UPDATE_LOCATION',
    commands,
  };
}
