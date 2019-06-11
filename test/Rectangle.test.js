const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
  it('isSquare', () => {
    const rectangle = new Rectangle(10, 5)
    assert.strictEqual(rectangle.isSquare(), false);
  });
  it('getArea', () => {
    const rectangle = new Rectangle(13, 7)
    assert.strictEqual(rectangle.getArea(), 91);
  });
  it('getPerimeter', () => {
    const rectangle = new Rectangle(13, 7)
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});
