import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DEFAULT_COMMANDS } from '../functions/const';
import { startCommandSequence } from '../sagas/actions';

const style = {
  maxHeight: '110px',
  minHeight: '80px',
};

const Input = ({ isRunning, dispatch }) => {
  const myRef = useRef(null);

  const changeCarLocation = () => {
    const array = myRef.current.value.trim().split('\n');
    dispatch(startCommandSequence(array));
  };
  return (
    <div>
      <label>
        Please input commands:
        <textarea ref={myRef} defaultValue={DEFAULT_COMMANDS} style={style} />
      </label>
      <button
        type="submit"
        value="Submit"
        onClick={changeCarLocation}
        disabled={isRunning}
      >
        Submit
      </button>
    </div>
  );
};

Input.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isRunning: state.app.isRunning,
});
export default connect(mapStateToProps)(Input);
