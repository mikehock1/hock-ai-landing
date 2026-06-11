const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail } = require('../src/js/validation.js');

test('accepts addresses with allowed domain extensions', () => {
  assert.equal(isValidEmail('user@example.com'), true);
  assert.equal(isValidEmail('user@example.org'), true);
  assert.equal(isValidEmail('user@example.edu'), true);
  assert.equal(isValidEmail('user@example.gov'), true);
  assert.equal(isValidEmail('user@example.net'), true);
  assert.equal(isValidEmail('user@example.io'), true);
});

test('accepts addresses with subdomains', () => {
  assert.equal(isValidEmail('user@mail.example.com'), true);
});

test('is case-insensitive for the domain extension', () => {
  assert.equal(isValidEmail('user@example.COM'), true);
  assert.equal(isValidEmail('user@example.Io'), true);
});

test('rejects unsupported domain extensions', () => {
  assert.equal(isValidEmail('user@example.xyz'), false);
  assert.equal(isValidEmail('user@example.co'), false);
  assert.equal(isValidEmail('user@example.biz'), false);
  assert.equal(isValidEmail('user@example.io2'), false);
});

test('rejects structurally invalid addresses', () => {
  assert.equal(isValidEmail('userexample.com'), false); // missing @
  assert.equal(isValidEmail('user@'), false); // missing domain
  assert.equal(isValidEmail('user@example'), false); // missing TLD
  assert.equal(isValidEmail(''), false); // empty string
  assert.equal(isValidEmail('   '), false); // whitespace only
  assert.equal(isValidEmail('user@@example.com'), false); // multiple @
  assert.equal(isValidEmail('user @example.com'), false); // contains space
});
