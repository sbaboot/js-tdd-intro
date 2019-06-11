// capitalizeFirst.test.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it('is a function that accepts one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });
  it('transforms sentence correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('javascript is good'), 'Javascript Is Good');
  });
  it('works for a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('zorro'), 'Zorro');
  });
  it('works for an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});
