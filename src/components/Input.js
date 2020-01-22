import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DEFAULT_COMMANDS } from '../functions/const';
import PlaceCommand from '../functions/placeCommands';
import MoveCommand from '../functions/moveCommands';
import TurnCommand from '../functions/turnCommands';
import ReportCommand from '../functions/reportCommands';
import { updateCarPositionCreator } from '../reducers/actions';

const Input = ({ dispatch }) => {
  const inputEl = useRef(null);
  const style = {
    maxHeight: '110px',
    minHeight: '80px',
  };

  const executeCommand = () => {
    const array = inputEl.current.value.trim().split('\n');
    let car = [];

    for (let i = 0; i < array.length; i++) {
      // PlaceCommand
      if (PlaceCommand.tryparse(array[i])) {
        const command = new PlaceCommand(array[i]);
        car = command.execute(array[i]);
        dispatch(updateCarPositionCreator(car));
      }

      // MoveCommand
      if (MoveCommand.tryparse(array[i])) {
        const command = new MoveCommand(car[0]);
        car = command.execute(array[i]);
        dispatch(updateCarPositionCreator(car));
      }

      // TurnCommand
      if (TurnCommand.tryparse(array[i])) {
        const command = new TurnCommand(car[0]);
        car = command.execute(array[i]);
        dispatch(updateCarPositionCreator(car));
      }

      if (array[i] === 'REPORT') {
        const command = new ReportCommand(car[0]);
        car = command.execute();
        dispatch(updateCarPositionCreator(car));
      }
    }
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
