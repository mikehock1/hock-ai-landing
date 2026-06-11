// Email validation shared between the browser form (src/js/main.js) and unit tests.
// Only allows addresses ending in a recognized domain extension.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.(com|org|edu|gov|net|io)$/i;

function isValidEmail(email) {
  return EMAIL_PATTERN.test(email);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { isValidEmail };
}
