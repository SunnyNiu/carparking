import { dimension } from './const';

export default function createMatrix() {
  const matrix = [];
  for (let i = 0; i < dimension; i++) {
    const arr = [];
    for (let j = 0; j < dimension; j++) {
      arr[j] = [j, dimension - 1 - i];
    }
    matrix.push(arr);
  }
  return matrix;
}
