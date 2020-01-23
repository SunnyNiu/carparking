import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Output from './Output';

const mockStore = configureStore([]);

describe('Output', () => {
  const store = mockStore({
    app: { output: '1,1,East' },
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
    expect(wrapper.containsAllMatchingElements([<label>1,1,East</label>])).toBe(
      true
    );
  });
});
