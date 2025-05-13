/**
 * @module math
 * Using commonjs module system
 */

/**
 * Add two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtract two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}


module.exports = {
  add,
  subtract,
};
