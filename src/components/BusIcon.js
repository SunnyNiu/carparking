import PropTypes from 'prop-types';

const facings = {
  NORTH: '👆',
  EAST: '👉',
  SOUTH: '👇',
  WEST: '👈',
};

const BusIcon = ({ location }) => facings[location.facing];

BusIcon.propTypes = {
  facing: PropTypes.oneOf(['EAST', 'SOUTH', 'WEST', 'NORTH']),
};

BusIcon.defaultProps = {
  facing: undefined,
};

export default BusIcon;
