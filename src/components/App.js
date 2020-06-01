import React from 'react';
import styled from 'styled-components';
import Carpark from './Carpark';
import Input from './Input';
import Output from './Output';
import Description from './Description';

const AppContainer = styled.div`
  width: fit-content;
  margin: 4px auto;
  font-family: monospace;
  * + label {
    margin-left: 2px;
    margin-top: 10px;
    margin-bottom: 2px;
    display: block;
  }
`;

const App = () => (
  <AppContainer>
    <Carpark />
    <Input />
    <Output />
    <Description />
  </AppContainer>
);

export default App;
