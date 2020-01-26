export default class ReportCommand {
  static tryParse(command) {
    if (command === 'REPORT') {
      return new ReportCommand();
    }
    return null;
  }

  executeCommand(obj) {
    const result = `${obj.x},${obj.y},${obj.facing}`;
    return [obj, result];
  }
}
