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
module.exports = capitalizeFirstLetters;
