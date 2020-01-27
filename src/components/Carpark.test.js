import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Carpark from './Carpark';

const mockStore = configureStore([]);

describe('<Carpark/> component', () => {
  const store = mockStore({
    app: {
      location: {
        x: 0,
        y: 4,
        facing: 'NORTH',
      },
      output: '',
    },
  });

  const wrapper = mount(
    <Provider store={store}>
      <Carpark />
    </Provider>
  );
  it('Carpark snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Car could locate in the correct facing', () => {
    expect(wrapper.text()).toContain('👆');
  });

  it('Car could locate in the correct location', () => {
    expect(
      wrapper
        .find('CarparkCell')
        .at(0)
        .text()
    ).toEqual('👆');
  });
});
