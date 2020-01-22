import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createMatrix from '../functions/createMatrix';

const CarparkCell = styled(Cell)`
  background-color: pink;
  font-size: 50px;
`;

const Carpark = ({ location }) => {
  const facings = {
    NORTH: '👆',
    EAST: '👉',
    SOUTH: '👇',
    WEST: '👈',
  };
  const matrix = createMatrix();
  return (
    <div>
      <Grid columns="repeat(5,64px)" rows="repeat(5,64px)">
        {matrix.flat().map(([x, y]) => (
          <CarparkCell key={`${x},${y}`}>
            {x === location.x && y === location.y && facings[location.facing]}
          </CarparkCell>
        ))}
      </Grid>
    </div>
  );
};

Carpark.propTypes = {
  location: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    facing: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    location: state.app.location,
  };
};
export default connect(mapStateToProps)(Carpark);
