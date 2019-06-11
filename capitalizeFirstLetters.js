// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input) {
  if (input === '') {
    return ''
  } else {
    return input
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javascript is good'), 'Javascript Is Good');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('zorro'), 'Zorro');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');