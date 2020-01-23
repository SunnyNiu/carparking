import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DEFAULT_COMMANDS } from '../functions/const';
import { updateCarPositionCreator } from '../reducers/actions';

const Input = ({ dispatch }) => {
  const inputEl = useRef(null);
  const style = {
    maxHeight: '110px',
    minHeight: '80px',
  };

  const executeCommand = () => {
    const array = inputEl.current.value.trim().split('\n');
    dispatch(updateCarPositionCreator(array));
  };
  return (
    <div>
      <label>input commands:</label>
      <textarea
        ref={inputEl}
        defaultValue={DEFAULT_COMMANDS.trim()}
        style={style}
      />
      <button onClick={executeCommand} type="submit">
        Submit
      </button>
    </div>
  );
};

Input.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Input);
