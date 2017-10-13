const sum = require('./sum');

describe('Sum function test', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
