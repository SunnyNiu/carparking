import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';
import createMatrix from '../functions/createMatrix';
import { dimension } from '../functions/commands';

const SpaceCell = styled(Cell)`
  background-color: pink;
`;

const Carpark = () => {
  const matrix = createMatrix();
  // return <div>{state.reduce((acc, item) => acc.concat(item), [])}</div>;
  return (
    <Grid
      columns={`repeat(${dimension} ,64px)`}
      rows={`repeat(${dimension} ,64px)`}
    >
      {matrix
        .reverse()
        .flat()
        .map(([x, y]) => (
          <SpaceCell key={`${x},${y}`}>{`${x},${y}`}</SpaceCell>
        ))}
    </Grid>
  );
};

export default Carpark;
