import React from 'react';
import createMatrix from 'functions/createMatrix';

class Carpark extends React.Component {
  state = createMatrix();
  render() {
    return <div>{this.state.reduce((acc, item) => acc.concat(item), [])}</div>;
  }
}
export default Carpark;
