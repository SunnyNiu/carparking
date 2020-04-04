export default function createMatrix(dimension) {
  const matrix = [];
  // eslint-disable-next-line no-plusplus
  for (let i = dimension - 1; i >= 0; i--) {
    const array = [];
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < dimension; j++) {
      array.push([j, i]);
    }
    matrix.push(array);
  }

  return matrix;
}
