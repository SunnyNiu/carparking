import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DEFAULT_COMMANDS } from '../functions/const';
import { updateCarLocationCreator } from '../reducers/actions';

const style = {
  maxHeight: '110px',
  minHeight: '80px',
};
const Input = ({ dispatch }) => {
  const myRef = useRef(null);

  const changeCarLocation = () => {
    const array = myRef.current.value.trim().split('\n');
    dispatch(updateCarLocationCreator(array));
  };
  return (
    <div>
      <label>
        Please input commands:
        <textarea ref={myRef} defaultValue={DEFAULT_COMMANDS} style={style} />
      </label>
      <button type="submit" value="Submit" onClick={changeCarLocation}>
        Submit
      </button>
    </div>
  );
};

Input.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect(null)(Input);
