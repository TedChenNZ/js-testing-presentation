import { expect } from 'chai';
import { addition } from '../utils';

describe('utils', () => {
  describe('addition', () => {
    it('adds 1 and 2 and returns 3', () => {
      expect(addition(1, 2)).to.equal(3);
    });
  });
});
