function createMatrix() {
  const matrix = [];
  for (let i = 0; i < 5; i++) {
    const arr = [];
    for (let j = 0; j < 5; j++) {
      arr[(i, j)] = false;
    }
    matrix.push(arr);
  }
  return matrix;
}

export default createMatrix;
