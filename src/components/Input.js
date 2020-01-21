import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EXAMPLE_COMMANDS } from '../functions/const';
import { updateBus } from '../reducers/actions';

const Input = ({ dispatch }) => {
  const inputArea = useRef(null);
  const style = { maxHeight: '120px', minHeight: '100px' };

  const executeCommands = () => {
    const commandsInput = inputArea.current.value.trim().split('\n');
    dispatch(updateBus(commandsInput));
  };

  return (
    <div>
      <label>Input Command:</label>
      <textarea
        style={style}
        id="commandInput"
        defaultValue={EXAMPLE_COMMANDS.trim()}
        placeholder="write one command each line"
        ref={inputArea}
      />
      <button onClick={executeCommands}> Submit </button>
    </div>
  );
};

Input.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Input);
