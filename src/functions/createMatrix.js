export default function createMatrix(dimension) {
  const matrix = [];
  for (let i = dimension - 1; i >= 0; i--) {
    const array = [];
    for (let j = 0; j < dimension; j++) {
      array.push([j, i]);
    }
    matrix.push(array);
  }

  return matrix;
}
