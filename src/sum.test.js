import { expect } from 'chai';
const sum = require('./sum');

describe('Sum function test', () => {
  it('should add two numbers', () => {
    expect(sum(1,2)).to.equal(3);
  });
});
