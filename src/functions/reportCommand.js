export default class ReportCommand {
  static tryParse(command) {
    if (command === 'REPORT') {
      return new ReportCommand();
    }
    return null;
  }

  // eslint-disable-next-line class-methods-use-this
  executeCommand(obj) {
    const result = `${obj.x},${obj.y},${obj.facing}`;
    return [obj, result];
  }
}
