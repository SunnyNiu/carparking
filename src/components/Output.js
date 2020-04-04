import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Output = ({ output }) => {
  return (
    <div>
      <label>Report:</label>
      <label>{output}</label>
    </div>
  );
};

Output.propTypes = {
  output: PropTypes.string.isRequired,
};
const mapStateToProps = state => {
  return {
    output: state.app.output,
  };
};
export default connect(mapStateToProps)(Output);
