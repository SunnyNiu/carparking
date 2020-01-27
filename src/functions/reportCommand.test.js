import ReportCommand from './reportCommand';

describe('Report command', () => {
  it('Could verify it is report command', () => {
    const expected = new ReportCommand();
    const actual = ReportCommand.tryParse('REPORT');
    expect(actual).toEqual(expected);
  });

  it('Could verify it is not report command', () => {
    const expected = null;
    const actual = ReportCommand.tryParse('xREPORT');
    expect(actual).toEqual(expected);
  });

  it('Could return report result', () => {
    const obj = { x: 1, y: 1, facing: 'NORTH' };
    const expected = [obj, '1,1,NORTH'];
    const command = new ReportCommand();
    const actual = command.executeCommand(obj);
    expect(actual).toEqual(expected);
  });
});
