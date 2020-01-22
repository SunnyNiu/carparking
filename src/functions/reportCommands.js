export default class ReportCommand {
  constructor(obj) {
    this.obj = obj;
  }

  static tryparse(commandString, obj) {
    if (commandString === 'REPORT') {
      return new ReportCommand(obj);
    }
    return null;
  }

  execute() {
    const output = `${this.obj.x},${this.obj.y},${this.obj.facing}`;
    console.log(output);
    return [this.obj, output];
  }
}
