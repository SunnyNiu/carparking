import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Input from './Input';

const mockStore = configureStore([]);

describe('Input', () => {
  const store = mockStore({
    app: {
      location: {
        x: 0,
        y: 4,
        facing: 'WEST',
      },
      output: '',
    },
  });

  const wrapper = mount(
    <Provider store={store}>
      <Input />
    </Provider>
  );

  it('Input snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
