export default class ReportCommand {
  static tryparse(commandString) {
    if (commandString === 'REPORT') {
      return new ReportCommand(commandString);
    }
    return null;
  }

  execute({ x, y, facing }) {
    const output = `${x},${y},${facing}`;
    console.log(output);
    return [{ x, y, facing }, output];
  }
}
