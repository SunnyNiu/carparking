function createMatrix() {
  const matrix = [];
  for (let y = 0; y < 5; y++) {
    const arr = [];
    for (let x = 0; x < 5; x++) {
      arr[x] = [x, y];
    }
    matrix.push(arr);
  }
  return matrix;
}

export default createMatrix;
