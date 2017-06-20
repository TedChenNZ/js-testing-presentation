import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Counter from '../Counter';
import Store from '../../../store';

chai.use(chaiEnzyme());

describe('Counter', () => {
  let wrapper;
  beforeEach(() => {
    Store.reset();
    wrapper = shallow(<Counter />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render()', () => {
    it('displays increments', () => {
      Store.increments = 1;
      expect(wrapper.find('#increments')).to.contain.text('1');
    });

    it('displays decrements', () => {
      Store.decrements = 1;
      expect(wrapper.find('#decrements')).to.have.text('decrements: 1');
    });
  });
  describe('#increment', () => {
    it('calls Store.increment(1) when clicked', () => {
      const storeSpy = sinon.stub(Store, 'increment');
      wrapper.find('#increment').simulate('click');
      expect(storeSpy.calledOnce).to.equal(true);
      expect(Store.increment.getCall(0).args[0]).to.equal(1);
      storeSpy.restore();
    });
  });
});
