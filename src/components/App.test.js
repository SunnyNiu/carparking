import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App/> component', () => {
  it('App snapshot', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
