import createMatrix from './createMatrix';

describe('Create Matrix works correctly', () => {
  it('Create Matrix with dimension is 2', () => {
    const expected = [
      [
        [0, 1],
        [1, 1],
      ],
      [
        [0, 0],
        [1, 0],
      ],
    ];

    const actual = createMatrix(2);
    expect(actual).toEqual(expected);
  });
});
