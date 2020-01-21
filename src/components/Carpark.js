import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';
import { connect } from 'react-redux';
import createMatrix from '../functions/createMatrix';
import { dimension } from '../functions/commands';

const CellSpace = styled(Cell)`
  background-color: pink;
`;

const GridCarPark = styled(Grid)`
  font-size: 50px;
`;

const Carpark = ({ location }) => {
  const matrix = createMatrix();

  const facing = {
    SOUTH: '👇',
    EAST: '👉',
    NORTH: '👆',
    WEST: '👈',
  };
  return (
    <div>
      <GridCarPark
        columns={`repeat(${dimension} ,64px)`}
        rows={`repeat(${dimension} ,64px)`}
      >
        {matrix
          .reverse()
          .flat()
          .map(([x, y]) => (
            <CellSpace key={`${x},${y}`}>
              {location.x === x && location.y === y && facing[location.facing]}
            </CellSpace>
          ))}
      </GridCarPark>
    </div>
  );
};

Carpark.propTypes = {
  location: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    facing: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    location: state.app.location,
  };
};

export default connect(mapStateToProps)(Carpark);
