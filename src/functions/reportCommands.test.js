import ReportCommand from './reportCommands';

const commandString = 'REPORT';
const invalidReportCommand = 'RES';
const obj = { x: 1, y: 1, facing: 'WEST' };

describe('move command', () => {
  it('report command, verify it is valid report command', () => {
    const expected = new ReportCommand();

    const actual = ReportCommand.tryparse(commandString);
    expect(actual).toEqual(expected);
  });

  it('report command with invalid command, it will return null', () => {
    const expected = null;
    const actual = ReportCommand.tryparse(invalidReportCommand);
    expect(actual).toEqual(expected);
  });

  it('report command, it will return report', () => {
    const expected = [{ x: 1, y: 1, facing: 'WEST' }, '1,1,WEST'];
    const command = new ReportCommand();
    const actual = command.execute(obj);
    expect(actual).toEqual(expected);
  });
});
