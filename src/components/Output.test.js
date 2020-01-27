import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Output from './Output';

const mockStore = configureStore([]);

describe('<Output/> component', () => {
  const store = mockStore({
    app: {
      location: {
        x: 0,
        y: 4,
        facing: 'NORTH',
      },
      output: '0,4,NORTH',
    },
  });

  const wrapper = mount(
    <Provider store={store}>
      <Output />
    </Provider>
  );
  it('Output snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('show all output', () => {
    expect(
      wrapper.containsAllMatchingElements([<label>0,4,NORTH</label>])
    ).toBe(true);
  });
});
