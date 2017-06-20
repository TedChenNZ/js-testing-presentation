import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CounterDisplay from '../CounterDisplay';
import { GREEN, BLUE } from '../../../constants';

chai.use(chaiEnzyme());

describe('CounterDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CounterDisplay />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render', () => {
    it('displays count', () => {
      wrapper.setProps({
        count: 1
      });
      expect(wrapper.find('#count')).to.have.text('1');
    });
  });
  describe('state', () => {
    it('click toggles active state', () => {
      wrapper.simulate('click');
      expect(wrapper.state('active')).is.true;
      wrapper.simulate('click');
      expect(wrapper.state('active')).is.false;
    });
  })
  describe('style', () => {
    it('has a blue background if state is active', () => {
      wrapper.setState({
        active: true,
      });
      const style = wrapper.instance().style();
      expect(style).to.have.property('background').which.equals(BLUE);
    });

    it('has a green background if state is not active', () => {
      wrapper.setState({
        active: false,
      });
      const style = wrapper.instance().style();
      expect(style).to.have.property('background').which.equals(GREEN);
    });
  })
});
