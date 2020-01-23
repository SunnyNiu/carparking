import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Carpark from './Carpark';

const mockStore = configureStore([]);
jest.mock('react-dom');

describe('Carpark', () => {
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
      <Carpark />
    </Provider>
  );

  it('it render car with the correct facing', () => {
    expect(wrapper.text()).toMatch('👈');
  });

  // '👈' does not recognised if not using text
  // it('it render car at the correct location', () => {
  //   expect(
  //     wrapper
  //       .find('CarparkCell')
  //       .at(0)
  //       .find('👈')
  //       .exists()
  //   ).toBe(true);
  // });

  it('Carpark snapShot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
