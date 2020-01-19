import React, { useState } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';
import createMatrix from '../functions/createMatrix';
import { unit } from '../functions/commands';

const SpaceCell = styled(Cell)`
  background-color: pink;
`;

const Carpark = () => {
  const matrix = createMatrix();
  // return <div>{state.reduce((acc, item) => acc.concat(item), [])}</div>;
  return (
    <Grid columns={unit} rows={unit}>
      {matrix
        .reverse()
        .flat()
        .map(([x, y]) => (
          // eslint-disable-next-line react/no-array-index-key
          <SpaceCell key={`${x},${y}`} height={1}>
            {`${x},${y}`}
          </SpaceCell>
        ))}
    </Grid>
  );
};

export default Carpark;
