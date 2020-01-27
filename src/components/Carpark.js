import React from 'react';
import createMatrix from '../functions/createMatrix';

const Carpark = () => {
  const matrix = createMatrix(5);

  console.log(matrix);
  return (
    <div>
      {matrix.map(x => (
        <div>{x}</div>
      ))}
    </div>
  );
};

export default Carpark;
